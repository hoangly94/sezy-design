import React from 'react';
import ReactDOM from "react-dom";
import Classnames from 'classnames';
import styles from './_styles.module.css';
import ThreeDotsLoader from '../icon/solid/threeDotsLoader';


export interface MessageIProps {
  size?: 's1' | 's' | 'm' | 'l' | 'l1',
  placement?: 't',
  children?: React.ReactNode,
}

const Message = (function () {
  let instance;

  return {
    getInstance: function () {
      if (!instance) {
        instance = React.useState([]);
      }
      const [state, setState] = React.useState(instance);
      const rootEl = document.createElement('div')
      document.body.appendChild(rootEl)
      ReactDOM.render(
        instance.map(children => <div>{children}</div>),
        rootEl
      )
      return instance;
    },
    text: ({
      size = 'm',
      placement = 't',
      children
    }: MessageIProps) => {
    }
  }
})();


export default Message












