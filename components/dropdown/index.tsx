import * as React from 'react';
import Classnames from 'classnames';
import styles from './_styles.css';
import {Classes}from '../_base';
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
    className:Classnames(
      styles['sezy-dropdown'],
      // styles['sezy-dropdown-'+type],
      styles['sezy-dropdown-size-'+size],
      styles['sezy-dropdown-placement-'+placement],
      styles[isDisabled ? 'sezy-dropdown-disabled' : ''],
      classes,
    ),
    onClick: (e) => !isDisabled && !isLoading && onClick && onClick(e),
  }

  const CaretIcon = caretIconName && require('../icon/' + caretIconName).default;

  const listClasses:string[] = ['zindex-500', 'bg-white'];
  (isDisabled || clickData.isOutside) && listClasses.push('hidden');
  listClasses.push(Classes(
    // styles['sezy-dropdown'],
    // styles['sezy-dropdown-'+type],
    // styles['sezy-dropdown-'+size],
    // styles[isDisabled ? 'sezy-dropdown-disabled' : ''],
    // classes,
  ))
  return (
    <div {...dropdownProps}>
      <div
        ref={ref}
        className='sezy-dropdown-button cursor-pointer'
      >
        {leftIcon}
        {label}
        {
        caretIconName && 
          <CaretIcon 
            classes='sezy-dropdown-caret ml-2'
          />
        }
      </div>
      <List size={size}
        classes={listClasses.join(' ')}
      >
        {children}
      </List>
    </div>
  )
}

export default Dropdown
export {
  IProps as DropdownIProps,
}












