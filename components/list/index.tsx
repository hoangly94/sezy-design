import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css';

export interface ListIProps {
  type?: 'outline' | 'flat',
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
}: ListIProps) => {

  const listProps = {
    ...otherProps,
    className: Classnames(
      styles['sezy-list'],
      styles['sezy-list-' + type],
      styles['sezy-list-' + size],
      className,
    ),
  }

  return (
    <div {...listProps}>
      {children}
    </div>
  )
}

export default List












