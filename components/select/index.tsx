import * as React from 'react';
import Classnames from 'classnames';
import styles from './_styles.css';
import List from '../list';
import Input from '../input';
import { useClickOutside } from '../../hooks';
import Caret from '../icon/solid/caret';
import ThreeDotsLoader from '../icon/solid/threeDotsLoader';

interface IProps {
  type?: 'flat' | 'outline',
  size?: 's' | 'm' | 'l',
  href?: string,
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
  href = '',
  isDisabled = false,
  isLoading = false,
  isSearchable = false,
  placement = 'bf',
  trigger = 'hover',
  classes,
  onClick,
  children,
  ...otherProps
}: IProps, ref) => {
  const {
    ref: clickOutsideRef,
    clickData,
  } = useClickOutside();
  const selectProps = {
    ...otherProps,
    className: Classnames(
      styles['sezy-select'],
      styles['sezy-select-' + type],
      styles['sezy-select-size-' + size],
      styles['sezy-select-placement-' + placement],
      isDisabled && styles['sezy-select-disabled'],
      trigger === 'hover' && !(isLoading || isDisabled) && styles['sezy-select-hover'],
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
          console.log('----------');
          console.log(child?.props);
          console.log(ref?.current);
          ref?.current && (ref.current.value = child?.props?.value ?? '');
          // ref?.current && (ref.current = '');
        },
      })
    ));
  };

  return (
    <div {...selectProps}>
      <div
        ref={clickOutsideRef}
      >
        {
          isLoading ? <ThreeDotsLoader size='l2' classes="sezy-select-loading" /> :
            <>
              <Input ref={ref} size={size} postfix={<Caret size={selectSizeToCaretSize[size] as any} />} />
              {/* <div className={Classnames(styles['sezy-select-caret'])}>
                
              </div> */}
            </>
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












