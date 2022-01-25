import { useEffect, useState } from 'react';
import { IElementDimensions } from '../interface'

const useDimensions = (wrapperRef) => {
  const [dimensions, setDimensions] = useState<IElementDimensions>({
    offsetWidth: 0,
    offsetHeight: 0,
    offsetLeft: 0,
    offsetTop: 0,
  });

  useEffect(() => {
    const element = wrapperRef.current?.attrs?.container;
    element && setDimensions({
      offsetWidth: element.offsetWidth,
      offsetHeight: element.offsetHeight,
      offsetLeft: element.offsetLeft,
      offsetTop: element.offsetTop,
    });
  }, []);

  return dimensions;
}

export default useDimensions