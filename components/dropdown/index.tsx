import * as React from 'react';
import Classnames from 'classnames';
import styles from './_styles.css';
import List from '../list';
import { useClickOutside } from '../../hooks';
import Caret from '../icon/solid/caret';
import ThreeDotsLoader from '../icon/solid/threeDotsLoader';

interface IProps {
  type?: 'flat' | 'outline',
  size?: 's' | 'm' | 'l',
  label?: string,
  isDisabled?: boolean,
  href?: string,
  isLoading?: boolean,
  leftIcon?: React.ReactNode,
  caretIcon?: React.ReactNode,
  placement?: 't' | 'tr' | 'tl' | 'r' | 'rt' | 'rb' | 'b' | 'br' | 'bf' | 'l' | 'lt' | 'lb',
  trigger?: 'hover' | 'click',

  classes?: string,
  onClick?: React.MouseEventHandler,
  children?: React.ReactNode,
}

const Dropdown = ({
  type = 'outline',
  size = 'm',
  label,
  isDisabled = false,
  href = '',
  isLoading = false,
  leftIcon,
  caretIcon,
  placement = 'bf',
  trigger = 'hover',
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
      styles['sezy-dropdown-' + type],
      styles['sezy-dropdown-size-' + size],
      styles['sezy-dropdown-placement-' + placement],
      isDisabled && styles['sezy-dropdown-disabled'],
      trigger === 'hover' && !(isLoading || isDisabled) && styles['sezy-dropdown-hover'],
      classes,
    ),
    onClick: (e) => !isDisabled && !isLoading && onClick && onClick(e),
  }
  const caretIconElement = caretIcon || <Caret size={dropdownSizeToCaretSize[size] as any} />;
  return (
    <div {...dropdownProps}>
      <div
        ref={ref}
        className={Classnames(styles['sezy-dropdown-button'])}
      >
        {
          isLoading ? <ThreeDotsLoader size='l2' classes="sezy-dropdown-loading" /> :
            <>
              {leftIcon}
              {label}

              <div className={Classnames(styles['sezy-dropdown-caret'])}>
                {caretIconElement}
              </div>
            </>
        }
      </div>
      <List type='outline' size={size}
        {...(trigger === 'click' && !(isLoading || isDisabled || clickData.isOutside) && { style: { maxHeight: '1000px' } })}
      >
        {children}
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
export {
  IProps as DropdownIProps,
}












