import React, { useState, useEffect, useRef, ReactPortal } from 'react'
import * as ReactDOM from 'react-dom';

type TPortalCallback = ({ children }: IPortalProps) => ReactPortal | null;

interface IPortalProps {
  children: React.ReactNode,
}

interface IStatePortal {
  render: TPortalCallback,
  remove: (element?: Element) => boolean | null,
}

const usePortal =  (element: Element) => {
  const [portal, setPortal] = React.useState<IStatePortal>({
    render: () => null,
    remove: () => null,
  });

  const createPortal = React.useCallback<(element: Element) => IStatePortal>((element) => {
    const Portal: TPortalCallback = ({children}) => ReactDOM.createPortal(children, element) as ReactPortal;
    const remove = (element) => ReactDOM.unmountComponentAtNode(element);
    return {
      render: Portal,
      remove
    };
  }, []);

  useEffect(() => {
    element && portal.remove();
    const newPortal = createPortal(element);
    setPortal(newPortal);

    return () => {
      newPortal.remove(element)
    }
  }, [element]);

  return portal.render;
};

export default usePortal