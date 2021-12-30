import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css';

export interface BadgeIProps {
  // type?: 'outline' | 'flat',
  size?: 's' | 'm' | 'l',
  value?: any,
  className?: string,
  children?: React.ReactNode
}

const Badge = ({
  // type = 'flat',
  size = 'm',
  value,
  className,
  children,
  ...otherProps
}: BadgeIProps) => {

  return (
    <span className={Classnames(styles['sezy-badge-wrapper'])}>
      {children}
      <span
        className={Classnames(
          styles['sezy-badge'],
          // styles['sezy-badge-' + type],
          styles['sezy-badge-' + size],
          className,
        )}
        {...otherProps}
      >
        {value}
      </span>
    </span>
  )
}

export default Badge












