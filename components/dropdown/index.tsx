import * as React from 'react';
import Classnames from 'classnames';
import styles from './_styles.css';
import { Classes } from '../_base';
import List from '../list';
import { useClickOutside, useForceRender } from '../../hooks';

interface IProps {
  type?: 'default' | 'flat' | 'outline',
  size?: 's' | 'm' | 'l',
  label?: string,
  isDisabled?: boolean,
  href?: string,
  isLoading?: boolean,
  leftIcon?: React.ReactNode,
  caretIconName?: 'caret' | string,
  placement?: 't' | 'tr' | 'tl' | 'r' | 'rt' | 'rb' | 'b' | 'br' | 'bf' | 'l' | 'lt' | 'lb',
  classes?: string,
  onClick?: React.MouseEventHandler,
  children?: React.ReactNode,
}

const Dropdown = ({
  type = 'default',
  size = 'm',
  label,
  isDisabled = false,
  href = '',
  isLoading = false,
  leftIcon,
  caretIconName,
  placement = 'bf',
  classes,
  onClick,
  children,
  ...otherProps
}: IProps) => {

  const {
    ref,
    clickData,
  } = useClickOutside();

  const dropdownProps = {
    ...otherProps,
    className: Classnames(
      styles['sezy-dropdown'],
      // styles['sezy-dropdown-'+type],
      styles['sezy-dropdown-size-' + size],
      styles['sezy-dropdown-placement-' + placement],
      styles[isDisabled ? 'sezy-dropdown-disabled' : ''],
      classes,
    ),
    onClick: (e) => !isDisabled && !isLoading && onClick && onClick(e),
  }

  const CaretIcon = caretIconName && require('../icon/' + caretIconName).default;

  return (
    <div {...dropdownProps}>
      <div
        ref={ref}
        className={Classnames(styles['sezy-dropdown-button'])}
      >
        {leftIcon}
        {label}
        {
          caretIconName &&
          <div className={Classnames(styles['sezy-dropdown-caret'])}>
            <CaretIcon size={dropdownSizeToCaretSize[size]} />
          </div>
        }
      </div>
      <List size={size}
        {...((isDisabled || clickData.isOutside) && { style: { display: 'none' } })}
      >
        {children}
      </List>
    </div>
  )
}
const dropdownSizeToCaretSize = {
  s: 's1',
  m: 's',
  l: 'm',
}
export default Dropdown
export {
  IProps as DropdownIProps,
}












