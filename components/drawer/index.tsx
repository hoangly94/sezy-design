import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css';

export interface DrawerIProps {
  type?: 'outline' | 'flat' | 'nude',
  isActive?: boolean,
  className?: string,
  // onClick?: React.MouseEventHandler,
  onClickClose: Function,
  children?: React.ReactNode,
}

const Drawer = ({
  type = 'flat',
  isActive = false,
  className,
  onClickClose,
  children,
  ...otherProps
}: DrawerIProps) => {
  return (
    <div
      {...otherProps}
      className={Classnames(
        styles['sezy-drawer'],
        styles['sezy-drawer-' + type],
        isActive && styles['sezy-drawer-active'],
        className,
      )}
    >
      <div
        className={styles['sezy-drawer-background']}
        onClick={() => onClickClose()}
      />
      <div
        className={styles['sezy-drawer-content']}
      >
        {children}
      </div>
    </div>
  )
}

export default Drawer












