import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css';
import List from '../list';
import { useClickOutside, useHover } from '../../hooks';
import Caret from '../icon/solid/caret';
import ThreeDotsLoader from '../icon/solid/threeDotsLoader';

export interface DropdownIProps {
  type?: 'flat' | 'outline',
  size?: 's' | 'm' | 'l',
  label?: string,
  href?: string,
  isDisabled?: boolean,
  isLoading?: boolean,
  leftIcon?: React.ReactNode,
  caretIcon?: React.ReactNode,
  placement?: 't' | 'tr' | 'tl' | 'r' | 'rt' | 'rb' | 'b' | 'br' | 'bl' | 'l' | 'lt' | 'lb',
  trigger?: 'hover' | 'click',

  className?: string,
  onClick?: React.MouseEventHandler,
  children: React.ReactNode,
}

const Dropdown = ({
  type = 'outline',
  size = 'm',
  label,
  href = '',
  isDisabled = false,
  isLoading = false,
  leftIcon,
  caretIcon,
  placement = 'bl',
  trigger = 'hover',
  className,
  onClick,
  children,
  ...otherProps
}: DropdownIProps) => {
  const { ref: clickOutsideRef, isClickOutside, setClickOutside } = useClickOutside({});
  // const { ref: hoverRef, isHovered, setHovered } = useHover();
  const dropdownProps = {
    ...otherProps,
    className: Classnames(
      styles['sezy-dropdown'],
      styles['sezy-dropdown-' + type],
      styles['sezy-dropdown-' + size],
      styles['sezy-dropdown-placement-' + placement],
      isDisabled && styles['sezy-dropdown-disabled'],
      !(isLoading || isDisabled) && trigger === 'click' && !isClickOutside && styles['sezy-dropdown-active'],
      !(isLoading || isDisabled) && trigger === 'hover' && isClickOutside && styles['sezy-dropdown-hover'],
      className,
    ),
    onClick: (e) => !isDisabled && !isLoading && onClick && onClick(e),
  }

  const clonedChildren: any = React.Children.toArray(React.Children.map<any, any>(children, child => (
    React.cloneElement(child, {
      ...child?.props,
    })
  ))
  );
  const button = clonedChildren.shift();
  return (
    <div {...dropdownProps}>
      <div ref={clickOutsideRef}>
        {
          React.cloneElement(button, {
            ...button?.props,
          })
        }
      </div>
      {/* {
          isLoading ? <ThreeDotsLoader size='l2' className="sezy-dropdown-loading" /> :
            <>
              {leftIcon}
              {label}
              <div className={Classnames(styles['sezy-dropdown-caret'])}>
                {caretIconElement}
              </div>
            </>
        } */}
      <List
        className={Classnames(styles['sezy-dropdown-list'])}
        type={type}
        size={size}
        onClick={() => {
          setClickOutside(false)
        }}
      >
        {clonedChildren}
      </List>
    </div>
  )
}
const dropdownSizeToCaretSize = {
  s: 's2',
  m: 's1',
  l: 's',
}

export default Dropdown












