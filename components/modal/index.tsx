import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css';

export interface ModalIProps {
  // type?: 'outline' | 'flat',
  size?: 's' | 'm' | 'l',
  isVisible?: boolean,
  className?: string,
  children?: React.ReactNode,
}

const Modal = ({
  // type = 'flat',
  size = 'm',
  isVisible = false,
  className,
  children,
  ...otherProps
}: ModalIProps) => {
  return (
    <div
      {...otherProps}
      className={Classnames(
        styles['sezy-modal'],
        className,
      )}
      style={{
        display: isVisible ? 'block' : 'none'
      }}
    >
      <div></div>
      <div>{children}</div>
    </div>
  )
}

export default Modal












