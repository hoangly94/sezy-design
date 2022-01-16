import React from 'react';
import ReactDOM from "react-dom";
import Classnames from 'classnames';
import styles from './_styles.module.css';

export interface ToastIProps {
  size?: 's' | 'm' | 'l',
  placement?: 't' | '',
  timeout?: number,
}

const Toast = (function () {
  let instance;
  let rootEl;
  let props: ToastIProps;

  if (typeof window === 'object')
    if (!instance) {
      instance = [];
      rootEl = document.createElement('div')
      document.body.appendChild(rootEl);
      props = {
        size: 'm',
        placement: 't',
        timeout: 2000
      }
    }

  return {
    init: (props) => {
      props = props;
    },
    text: (label: string) => {
      instance.push(<div key={`toast.${+ new Date()}`}>{label}</div>);
      setTimeout(Toast.expired, props.timeout);
      Toast.render();
    },
    dark: (label: string) => {
      instance.push(<div className={styles['sezy-toast-dark']} key={`toast.${+ new Date()}`}>{label}</div>);
      setTimeout(Toast.expired, props.timeout);
      Toast.render();
    },
    expired: () => {
      instance.shift();
      Toast.render();
    },
    render: () => {
      const {
        placement,
        size,
      } = props;
      ReactDOM.render(
        <div className={Classnames([
          styles['sezy-toast'],
          styles['sezy-toast-' + placement],
          styles['sezy-toast-' + size],
        ])}>{instance}</div>,
        rootEl
      )
    }
  }
})();

export default Toast












