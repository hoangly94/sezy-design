import * as React from 'react';
import Classnames from 'classnames';
import styles from './_styles.css';
import tailwindStyles from '../../src/index.css';
import { Link } from "react-router-dom";
import ThreeDotsLoader from '../icon/threeDotsLoader';
import {Classes} from '../_base';

interface IProps {
  type?: 'outline' | 'flat',
  size?: 's1' |'s' | 'm' | 'l' | 'l1',
  label?: string,
  isDisabled?: boolean,
  href?: string,
  isLoading?: boolean,
  isExternalLink?: boolean,
  round?: boolean,
  classes?: string,
  onClick?: React.MouseEventHandler,
  children?: React.ReactNode,
}

const Button = ({
    type = 'outline',
    size = 'm',
    label,
    isDisabled = false,
    href = '',
    isLoading = false,
    isExternalLink = false,
    round = false,
    classes,
    onClick,
    children,
    ...otherProps
  }: IProps) => {
  const child = isLoading ? <ThreeDotsLoader size='l2' fill='#fff' /> : (label ?? children);
  const buttonProps = {
    ...otherProps,
    className:Classnames(
      styles['sezy-button'],
      styles['sezy-button-'+type],
      styles['sezy-button-'+size],
      styles[isDisabled ? 'sezy-button-disabled' : ''],
      styles[round ? 'sezy-button-round' : ''],
      classes,
    ),
    onClick: (e) => !isDisabled && !isLoading && onClick && onClick(e),
  }

  const element = href === ''
    ? <button {...buttonProps}>{child}</button>
    : /^http.+$/.test(href)
      ? <a {...buttonProps}>{child}</a>
      : <Link  {...buttonProps} to={href}>{child}</Link>;
  
  return (
    element
  )
}

export default Button
export {
  IProps as ButtonIProps,
}












