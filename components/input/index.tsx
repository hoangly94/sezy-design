import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css';
import Delete from '../icon/solid/delete';
import AutoComplete, { AutoCompleteIProps } from '../autoComplete';
import ThreeDotsLoader from '../icon/solid/threeDotsLoader';

export interface InputIProps {
  type?: 'flat' | 'outline',
  tagType?: 'input' | 'textarea' | 'div',
  valueType?: 'text' | 'textValue' | 'password' | 'email' | 'number' | 'phone',
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
  className?: string,
  onClick?: React.MouseEventHandler,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onBlur?: React.MouseEventHandler,
  onFocus?: React.MouseEventHandler,
  children?: React.ReactNode,
}

const Input = ({
  type = 'outline',
  tagType = 'input',
  valueType = 'text',
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
  className,
  onClick,
  onChange,
  onBlur,
  onFocus,
  children,
  ...otherProps
}: InputIProps, ref) => {
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
      className,
    ),
    placeholder,
    onClick: (e) => !isDisabled && onClick && onClick(e),
    onChange: (e) => !isDisabled && showHideClearButton() && onChange && onChange(e),
    onBlur: (e) => !isDisabled && onBlur && onBlur(e),
    onFocus: (e) => !isDisabled && onFocus && onFocus(e),
  }

  const inputElement = (() => {
    switch (tagType) {
      case 'input':
        return (
          valueType === 'textValue'
            ? <>
              <input ref={textRef} {...inputProps} disabled={isDisabled} readOnly />
              <input ref={ref} disabled={isDisabled} readOnly={isReadOnly} type={mapType(valueType)} />
            </>
            : <input {...inputProps} ref={ref} disabled={isDisabled} readOnly={isReadOnly} type={mapType(valueType)} />
        )
      case 'div':
        return (
          <div
            {...inputProps}
            ref={ref}
            contentEditable={!isReadOnly}
          >{children}</div>
        )
      case 'textarea':
        return (
          <textarea />
        )
    }
  })();

  return (
    <div
      className={
        Classnames(
          styles['sezy-input-wrapper'],
          styles['sezy-input-error-' + errorPlacement],
          styles['sezy-input-' + size],
          styles['sezy-input-' + type],
        )
      }
      {...{ disabled: isDisabled }}
    >
      {prefix}
      {inputElement}
      {showClearButton && <Delete fill='#b8b8b8' className={styles['sezy-input-clear']} onClick={clearValue} size={size} />}
      {isLoading && <ThreeDotsLoader size={size} />}
      {postfix}
    </div>
  )
}

const selectSizeToLoadingSize = {
  s: 's',
  m: 'm',
  l: 'l',
}

const mapType = valueType => {
  if (valueType === 'textValue')
    return 'hidden';
  return valueType;
}

export default React.forwardRef(Input)












