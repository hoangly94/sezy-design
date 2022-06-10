import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css';
import { useEvent } from '../../hooks';

export interface ModalIProps {
  // type?: 'outline' | 'flat',
  size?: 's' | 'm' | 'l',
  isVisible?: boolean,
  setVisible?: (boolean) => void,
  className?: string,
  children?: React.ReactNode,
}

const Modal = ({
  // type = 'flat',
  size = 'm',
  isVisible = false,
  setVisible,
  className,
  children,
  ...otherProps
}: ModalIProps) => {
  useEvent('keyup', handleExitKeyUp(setVisible));
  
  return (
    <div
      {...otherProps}
      className={Classnames(
        styles['sezy-modal'],
        className,
      )}
      style={{
        display: isVisible ? 'block' : 'none',
      }}
    >
      <div onClick={() => setVisible?.(false)}></div>
      <div>{children}</div>
    </div>
  )
}

const handleExitKeyUp = (setVisible?: (boolean) => void) => (e) => {
  if (e.key === 'Escape') {
    setVisible?.(false)
  }
}

export default Modal












