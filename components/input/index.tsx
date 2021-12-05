import * as React from 'react';
import Classnames from 'classnames';
import styles from './_styles.css';
import Delete from '../icon/solid/delete';
import AutoComplete, { AutoCompleteIProps } from '../autoComplete';

interface IProps {
  type?: 'text' | 'password' | 'email' | 'number' | 'phone'
  size?: 's' | 'm' | 'l',
  label?: string,
  href?: string,
  placeholder?: string,
  isDisabled?: boolean,
  isLoading?: boolean,
  isClearable?: boolean,
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
  label,
  href = '',
  placeholder = '',
  isDisabled = false,
  isLoading = false,
  isClearable = false,
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
    <div>
      {label && <div className={Classnames(styles['sezy-input-label'])}>{label}</div>}
      <div
        className={
          Classnames(
            styles['sezy-input-wrapper'],
            styles['sezy-input-error-' + errorPlacement],
            styles['sezy-input-' + size],
            (isDisabled || isLoading) && styles['sezy-input-disabled'],
          )
        }>
        {prefix}
        <input  {...inputProps} ref={ref} disabled={isDisabled || isLoading} />
        {showClearButton && <Delete fill='#b8b8b8' classes={styles['sezy-input-clear']} onClick={clearValue} size={size} />}
        {postfix}
      </div>
    </div>
  )
}

export default React.forwardRef(Input)
export {
  IProps as InputIProps,
}












