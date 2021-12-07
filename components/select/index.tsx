import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.css';
import List from '../list';
import Input from '../input';
import { useClickOutside, useHover } from '../../hooks';
import Caret from '../icon/solid/caret';
import ThreeDotsLoader from '../icon/solid/threeDotsLoader';

interface IProps {
  type?: 'flat' | 'outline',
  size?: 's' | 'm' | 'l',
  placeholder?: string,
  isDisabled?: boolean,
  isLoading?: boolean,
  isSearchable?: boolean,
  placement?: 't' | 'tr' | 'tl' | 'r' | 'rt' | 'rb' | 'b' | 'br' | 'bf' | 'l' | 'lt' | 'lb',
  trigger?: 'hover' | 'click',
  classes?: string,
  onClick?: React.MouseEventHandler,
  children?: React.ReactNode,
}

const Select = ({
  type = 'outline',
  size = 'm',
  placeholder = '',
  isDisabled = false,
  isLoading = false,
  isSearchable = false,
  placement = 'bf',
  trigger,
  classes,
  onClick,
  children,
  ...otherProps
}: IProps, valueInputRef) => {
  const { ref: clickOutsideRef, isClickOutside, setClickOutside } = useClickOutside(valueInputRef);
  const { ref: hoverRef, isHovered, setHovered } = useHover();
  const labelInputRef: React.MutableRefObject<any> = React.useRef(null);

  const selectProps = {
    ...otherProps,
    className: Classnames(
      styles['sezy-select'],
      styles['sezy-select-' + type],
      styles['sezy-select-' + size],
      styles['sezy-select-placement-' + placement],
      isDisabled && styles['sezy-select-disabled'],
      !(isLoading || isDisabled) && ((!trigger && (isHovered || !isClickOutside)) || (trigger === 'hover' && isHovered) || (trigger === 'click' && !isClickOutside)) && styles['sezy-select-active'],
      classes,
    ),
    onClick: (e) => !isDisabled && !isLoading && onClick && onClick(e),
  }

  const convertListItem = () => {
    return React.Children.map<any, any>(children, child => (
      React.cloneElement(child, {
        ...child?.props,
        onClick: (e) => {
          child?.props?.onClick && child?.props?.onClick(e);
          valueInputRef?.current && (valueInputRef.current.value = child?.props?.value ?? '');
          labelInputRef?.current && (labelInputRef.current.value = child?.props?.children ?? '');
          setClickOutside(true);
          setHovered(false);
        },
      })
    ));
  };

  return (
    <div {...selectProps} ref={hoverRef}>
      <div>
        {
          isLoading
            ? <ThreeDotsLoader size='l2' classes="sezy-select-loading" />
            : <Input type='textValue' ref={clickOutsideRef} textRef={labelInputRef} size={size} postfix={<Caret size={selectSizeToCaretSize[size] as any} />} placeholder={placeholder} isReadOnly={true} />
        }
      </div>
      <List type='outline' size={size}>
        {convertListItem()}
      </List>
    </div>
  )
}

const selectSizeToCaretSize = {
  s: 's2',
  m: 's1',
  l: 's',
}


export default React.forwardRef(Select)
export {
  IProps as SelectIProps,
}












