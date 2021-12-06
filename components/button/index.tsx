import * as React from 'react';
import Classnames from 'classnames';
import styles from './_styles.css';
import { Link } from "react-router-dom";
import ThreeDotsLoader from '../icon/solid/threeDotsLoader';


interface IProps {
  type?: 'outline' | 'flat',
  size?: 's1' | 's' | 'm' | 'l' | 'l1',
  label?: string,
  href?: string,
  isActive?: boolean,
  isDisabled?: boolean,
  isLoading?: boolean,
  isExternalLink?: boolean,
  round?: boolean,
  classes?: string,
  onClick?: React.MouseEventHandler,
  children?: React.ReactNode,
}

const Button = ({
  type = 'flat',
  size = 'm',
  label,
  href = '',
  isActive = false,
  isDisabled = false,
  isLoading = false,
  isExternalLink = false,
  round = false,
  classes,
  onClick,
  children,
  ...otherProps
}: IProps) => {
  const child = isLoading ? <ThreeDotsLoader size='l2' /> : (label ?? children);
  const buttonProps = {
    ...otherProps,
    className: Classnames(
      styles['sezy-button'],
      styles['sezy-button-' + type],
      styles['sezy-button-' + size],
      // isDisabled && styles['sezy-button-disabled'],
      classes,
    ),
    onClick: (e) => !isDisabled && !isLoading && onClick && onClick(e),
    ...(isActive && { active: '' }),
    ...(isDisabled && { disabled: true }),
  }

  const element = href === ''
    ? <button {...buttonProps} >{child}</button>
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












