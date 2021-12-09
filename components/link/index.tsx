import React from 'react';
import Classnames from 'classnames';
import { Link as ReactLink } from "react-router-dom";
import styles from './_styles.module.css';

export interface LinkIProps {
  size?: 's' | 'm' | 'l',
  href?: string,
  label?: string,
  isExternal?: boolean,
  icon?: React.ReactNode,
  className?: string,
  onClick?: React.MouseEventHandler,
  children?: React.ReactNode,
}

const Link = ({
  href = '',
  size = 'm',
  label,
  isExternal = true,
  icon,
  className,
  onClick,
  children,
  ...otherProps
}: LinkIProps): React.ReactElement => {
  const linkProps = {
    ...otherProps,
    className: Classnames(
      styles['sezy-link'],
      styles['sezy-link-' + size],
      className,
    ),
    onClick,
    ...(href ? { href } : {}),
  };

  const child = <>{icon}{label ?? children}</>
  const linkElement = isExternal ? <a {...linkProps}>{child}</a> : <ReactLink  {...linkProps} to={href}>{child}</ReactLink>;

  return (
    linkElement
  )
}


export default Link