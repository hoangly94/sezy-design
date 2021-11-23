import * as React from 'react';
import Classnames from 'classnames';
import { Link as ReactLink } from "react-router-dom";
import styles from './_styles.css';
import {Classes}from '../_base';
import Icon,{IconIProps} from "../icon/index";

interface IProps {
  // type: 'link' | 'external' | 'logo' | "breadcrumbs",
  // type?: 'link' | 'link-external' | 'link-logo' | 'link-breadcrumbs',
  size?: 's' | 'm' | 'l',
  href?: string,
  label?: string,
  isExternal?: boolean,
  $icon?: IconIProps,
  classes?: string,
  onClick?: React.MouseEventHandler,
  children?: React.ReactNode,
}

const Link = ({
  // type = 'link',
  href = '',
  size = 'm',
  label,
  isExternal = true,
  $icon,
  classes,
  onClick,
  children,
  ...otherProps
}: IProps): React.ReactElement => {
  
  const linkProps = {
    ...otherProps,
    className:Classnames(
      // styles['sezy-'+type],
      styles['sezy-link-'+size],
      classes,
    ),
    onClick,
   ...( href ? { href } : {}),
  };

  const child = <><Icon {...$icon} />{label ?? children}</>
  const linkElement = isExternal ? <a {...linkProps}>{child}</a> : <ReactLink  {...linkProps} to={href}>{child}</ReactLink>;

  return (
    linkElement
  )
}


export default Link
export {
  IProps as LinkIProps,
}