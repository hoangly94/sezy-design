import * as React from 'react';
import Classnames from 'classnames';
import styles from './_styles.css';
import {Classes}from '../_base';

interface IProps {
  size?: 's' | 'm' | 'l',
  label?: string,
  isDisabled?: boolean,
  href?: string,
  placeholder?:string,
  isLoading?: boolean,
  prefix?: React.ReactNode,
  suffix?: React.ReactNode,
  errorText?: string,
  errorPlacement?: 't' |'r' | 'b' | 'l',
  classes?: string,
  ref?:any,
  onClick?: React.MouseEventHandler,
  onChange?: React.MouseEventHandler,
  onBlur?: React.MouseEventHandler,
  onFocus?: React.MouseEventHandler,
  children?: React.ReactNode,
}

const Input = ({
    size = 'm',
    label,
    isDisabled = false,
    href = '',
    placeholder,
    isLoading = false,
    prefix,
    suffix,
    errorText,
    errorPlacement = 'b',
    classes,
    onClick,
    onChange,
    onBlur,
    onFocus,
    children,
    ref,
    ...otherProps
  }: IProps) => {
  
  
  const inputProps = {
    ...otherProps,
    className:Classnames(
      styles['sezy-input'],
      styles['sezy-input-error-'+errorPlacement],
      styles['sezy-input-'+size],
      styles[isDisabled ? 'sezy-input-disabled' : ''],
      classes,
    ),
    placeholder,
    onClick: (e) => !isDisabled && !isLoading && onClick && onClick(e),
    onChange: (e) => !isDisabled && !isLoading && onChange && onChange(e),
    onBlur: (e) => !isDisabled && !isLoading && onBlur && onBlur(e),
    onFocus: (e) => !isDisabled && !isLoading && onFocus && onFocus(e),
  }

  return <input {...inputProps} />;
}


export default Input
export {
  IProps as InputIProps,
}












