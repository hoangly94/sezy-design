import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.css';
import Delete from '../icon/solid/delete';
import AutoComplete, { AutoCompleteIProps } from '../autoComplete';

interface IProps {
  type?: 'text' | 'textValue' | 'password' | 'email' | 'number' | 'phone',
  size?: 's' | 'm' | 'l',
  href?: string,
  placeholder?: string,
  textRef?: React.MutableRefObject<any>, // Only use for Type textValue
  isDisabled?: boolean,
  isLoading?: boolean,
  isClearable?: boolean,
  isReadOnly?: boolean,
  prefix?: React.ReactNode,
  postfix?: React.ReactNode,
  errorText?: string,
  errorPlacement?: 't' | 'r' | 'b' | 'l',
  $AutoComplete?: AutoCompleteIProps,
  classes?: string,
  onClick?: React.MouseEventHandler,
  onChange?: React.MouseEventHandler,
  onBlur?: React.MouseEventHandler,
  onFocus?: React.MouseEventHandler,
  children?: React.ReactNode,
}

const Input = ({
  type = 'text',
  size = 'm',
  href = '',
  placeholder = '',
  textRef,
  isDisabled = false,
  isLoading = false,
  isClearable = false,
  isReadOnly = false,
  prefix,
  postfix,
  errorText,
  errorPlacement = 'b',
  $AutoComplete,
  classes,
  onClick,
  onChange,
  onBlur,
  onFocus,
  children,
  ...otherProps
}: IProps, ref) => {
  const [showClearButton, setShowClearButton] = React.useState(false);

  const clearValue = (e) => {
    if (ref?.current) {
      ref.current.value = '';
      setShowClearButton(false);
    }
  }
  const showHideClearButton = () => {
    isClearable && ref?.current?.value?.length ? !showClearButton && setShowClearButton(true) : setShowClearButton(false);

  }

  const inputProps = {
    ...otherProps,
    className: Classnames(
      styles['sezy-input'],
      classes,
    ),
    placeholder,
    onClick: (e) => !isDisabled && !isLoading && onClick && onClick(e),
    onChange: (e) => !isDisabled && !isLoading && showHideClearButton() && onChange && onChange(e),
    onBlur: (e) => !isDisabled && !isLoading && onBlur && onBlur(e),
    onFocus: (e) => !isDisabled && !isLoading && onFocus && onFocus(e),
  }

  return (
    <div
      className={
        Classnames(
          styles['sezy-input-wrapper'],
          styles['sezy-input-error-' + errorPlacement],
          styles['sezy-input-' + size],
          // (isDisabled || isLoading) && styles['sezy-input-disabled'],
        )
      }
      {...{ disabled: isDisabled || isLoading }}
    >
      {prefix}
      {type === 'textValue'
        ? <>
          <input ref={textRef} {...inputProps} disabled={isDisabled || isLoading} readOnly />
          <input ref={ref} disabled={isDisabled || isLoading} readOnly={isReadOnly} type={mapType(type)} />
        </>
        : <input {...inputProps} ref={ref} disabled={isDisabled || isLoading} readOnly={isReadOnly} type={mapType(type)} />}
      {showClearButton && <Delete fill='#b8b8b8' classes={styles['sezy-input-clear']} onClick={clearValue} size={size} />}
      {postfix}
    </div>
  )
}

const mapType = type => {
  if (type === 'textValue')
    return 'hidden';
  return type;
}

export default React.forwardRef(Input)
export {
  IProps as InputIProps,
}












