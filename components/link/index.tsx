import * as React from 'react';
import Classnames from 'classnames';
import { Link as ReactLink } from "react-router-dom";
import styles from './_styles.css';

interface IProps {
  size?: 's' | 'm' | 'l',
  href?: string,
  label?: string,
  isExternal?: boolean,
  icon?: React.ReactNode,
  classes?: string,
  onClick?: React.MouseEventHandler,
  children?: React.ReactNode,
}

const Link = ({
  href = '',
  size = 'm',
  label,
  isExternal = true,
  icon,
  classes,
  onClick,
  children,
  ...otherProps
}: IProps): React.ReactElement => {
  const linkProps = {
    ...otherProps,
    className: Classnames(
      styles['sezy-link'],
      styles['sezy-link-' + size],
      classes,
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
export {
  IProps as LinkIProps,
}