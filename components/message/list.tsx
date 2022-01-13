import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css';

export interface ListIProps {
  type?: 'outline' | 'flat' | 'nude',
  size?: 's' | 'm' | 'l',
  href?: string,
  isLoading?: boolean,
  className?: string,
  onClick?: React.MouseEventHandler,
  children?: React.ReactNode,
}

const List = ({
  type = 'flat',
  size,
  href = '',
  isLoading = false,
  className,
  onClick,
  children,
  ...otherProps
}: ListIProps, ref) => {
  return (
    <div
      ref={ref}
      {...otherProps}
      className={Classnames(
        className,
      )}
    >
      {children}
    </div>
  )
}

export default React.forwardRef(List)












