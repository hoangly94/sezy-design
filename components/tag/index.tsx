import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css';

export interface TagIProps {
  type?: 'outline' | 'flat',
  size?: 's1' | 's' | 'm' | 'l' | 'l1',
  color?: string, // only support hex
  isDisabled?: boolean,
  isClearable?: boolean,
  className?: string,
  onClick?: React.MouseEventHandler,
  children?: React.ReactNode,
}

const Tag = ({
  type = 'flat',
  size = 'm',
  color,
  isDisabled = false,
  isClearable = false,
  className,
  onClick,
  children,
  ...otherProps
}: TagIProps) => {

  const style = color && type === 'outline'
    ? {
      color: color,
      backgroundColor: `${color}28`,
      borderColor: color,
    }
    : {};
  const tagProps = {
    ...otherProps,
    className: Classnames(
      styles['sezy-tag'],
      styles['sezy-tag-' + type],
      styles['sezy-tag-' + size],
      className,
    ),
    style,
    onClick: (e) => !isDisabled && onClick && onClick(e),
    ...(isDisabled && { disabled: true }),
  }

  return (
    <span {...tagProps}>
      {children}
      {isClearable && <span>&#10005;</span>}
    </span>
  )
}

export default Tag












