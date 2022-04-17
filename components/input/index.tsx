import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css';
import Delete from '../icon/solid/delete';
import ThreeDotsLoader from '../icon/solid/threeDotsLoader';

export interface InputIProps {
  type?: 'flat' | 'outline' | 'nude',
  tagType?: 'input' | 'textarea' | 'div',
  valueType?: 'text' | 'textValue' | 'password' | 'email' | 'number' | 'phone',
  size?: 's' | 'm' | 'l',
  name?: string,
  href?: string,
  placeholder?: string,
  textRef?: React.MutableRefObject<any>, // Only use for Type textValue
  wrapperRef?: React.MutableRefObject<any>,
  isDisabled?: boolean,
  isLoading?: boolean,
  isClearable?: boolean,
  isReadOnly?: boolean,
  prefix?: React.ReactNode,
  postfix?: React.ReactNode,
  errorText?: string,
  errorPlacement?: 't' | 'r' | 'b' | 'l',
  className?: string,
  onClick?: (e: any) => void,
  onChange?: (e: any) => void,
  onBlur?: (e: any) => void,
  onFocus?: (e: any) => void,
  onKeyUp?: (e: any) => void,
  onKeyPress?: (e: any) => void,
  children?: React.ReactNode,
}

const Input = ({
  type = 'outline',
  tagType = 'input',
  valueType = 'text',
  size = 'm',
  name,
  href = '',
  placeholder = '',
  textRef,
  wrapperRef,
  isDisabled = false,
  isLoading = false,
  isClearable = false,
  isReadOnly = false,
  prefix,
  postfix,
  errorText,
  errorPlacement = 'b',
  className,
  onClick,
  onChange,
  onBlur,
  onFocus,
  onKeyUp,
  onKeyPress,
  children,
  ...otherProps
}: InputIProps, ref) => {
  const [showClearButton, setShowClearButton] = React.useState(false);
  const showHideClearButton = () => {
    // !isDisabled && onChange && onChange({name:name || '', target:ref?.current})
    isClearable && ref?.current?.value?.length ? !showClearButton && setShowClearButton(true) : setShowClearButton(false);
  }
  React.useEffect(showHideClearButton, [ref?.current?.value]);

  const clearValue = (e) => {
    if (ref?.current) {
      ref.current.value = '';
      setShowClearButton(false);
    }
  }

  const inputProps = {
    ...otherProps,
    className: Classnames(
      styles['sezy-input'],
    ),
    name,
    placeholder,
    onChange: (e) => !isDisabled && onChange && onChange(e),
    onBlur: (e) => !isDisabled && onBlur && onBlur(e),
    onFocus: (e) => !isDisabled && onFocus && onFocus(e),
    onKeyUp: (e) => !isDisabled && onKeyUp && onKeyUp(e),
    onKeyPress: (e) => !isDisabled && onKeyPress && onKeyPress(e),
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
          <textarea
            {...inputProps}
            ref={ref}
          >{children}</textarea>
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
          className
        )
      }
      {...{ disabled: isDisabled }}
      ref={wrapperRef}
      onClick={(e) => !isDisabled && onClick && onClick(e)}
    >
      {prefix}
      {inputElement}
      {showClearButton && <Delete fill='#b8b8b8' className={styles['sezy-input-clear']} onClick={clearValue} size={size} />}
      {isLoading && <ThreeDotsLoader size={size} />}
      {postfix}
    </div>
  )
}

const mapType = valueType => {
  if (valueType === 'textValue')
    return 'hidden';
  return valueType;
}

export default React.forwardRef(Input)












