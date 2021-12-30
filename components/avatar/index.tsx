import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css';

export interface AvatarIProps {
  // type?: 'outline' | 'flat',
  size?: 's' | 'm' | 'l',
  src?: string,
  shape?: 'square' | 'circle',
  className?: string,
  children?: React.ReactNode,
}

const Avatar = ({
  // type = 'flat',
  size = 'm',
  src,
  shape = 'square',
  className,
  children,
  ...otherProps
}: AvatarIProps) => {

  const props = {
    className: Classnames(
      styles['sezy-avatar'],
      styles['sezy-avatar-' + shape],
      styles['sezy-avatar-' + size],
      className,
    ),
    src,
    ...otherProps
  }

  return src ? <img {...props} /> : <span {...props}>{children}</span>;
}

export default Avatar












