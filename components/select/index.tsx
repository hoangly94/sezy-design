import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css';
import List from '../list';
import Input from '../input';
import { useClickOutside, useHover } from '../../hooks';
import Caret from '../icon/solid/caret';
import ThreeDotsLoader from '../icon/solid/threeDotsLoader';
import Button from '../button';
import Checkbox from '../checkbox';
import Option, { OptionIProps } from './option';
import _ from 'lodash';

type TSelectedItem = {
  text: string | number,
  value: string | number,
}
type TLabel = {
  allOptions?: string,
  searchPlacholder?: string,
}

export interface SelectIProps {
  type?: 'flat' | 'outline',
  size?: 's' | 'm' | 'l',
  labels?: TLabel,
  selectedItems?: TSelectedItem[]
  placeholder?: string,
  isDisabled?: boolean,
  isLoading?: boolean,
  isSearchable?: boolean,
  isMulti?: boolean,
  placement?: 't' | 'tr' | 'tl' | 'r' | 'rt' | 'rb' | 'b' | 'br' | 'bf' | 'l' | 'lt' | 'lb',
  trigger?: 'hover' | 'click',
  className?: string,
  onClick?: React.MouseEventHandler,
  onSearchChange?: (key: string) => void,
  onChange?: Function,
  children?: React.ReactElement<OptionIProps>[],
}

const Select = ({
  type = 'outline',
  size = 'm',
  labels,
  selectedItems = [],
  placeholder = '',
  isDisabled = false,
  isLoading = false,
  isSearchable = false,
  isMulti = false,
  placement = 'bf',
  trigger,
  className,
  onClick,
  onSearchChange,
  onChange,
  children = [],
  ...otherProps
}: SelectIProps) => {
  const valueInputRef: React.MutableRefObject<any> = React.useRef(null)
  const searchInputRef: React.MutableRefObject<any> = React.useRef(null)
  const { ref: clickOutsideRef, isClickOutside, setClickOutside } = useClickOutside(valueInputRef);
  const { ref: hoverRef, isHovered, setHovered } = useHover();
  const labelInputRef: React.MutableRefObject<any> = React.useRef(null);
  const isAllChecked = React.useRef(false);
  const [selectedOptions, setSelectedOptions] = React.useState<TSelectedItem[]>(selectedItems);
  const [options, setOptions] = React.useState<React.ReactElement<OptionIProps>[]>(children);
  const numberOfItems = React.Children.count(children);

  React.useEffect(() => {
    setOptions(children);
  }, [children])

  const labelMap = Object.assign({
    allOptions: 'All',
    searchPlacholder: 'Search...'
  }, labels);

  const selectProps = {
    ...otherProps,
    className: Classnames(
      styles['sezy-select'],
      styles['sezy-select-' + type],
      styles['sezy-select-' + size],
      styles['sezy-select-placement-' + placement],
      isDisabled && styles['sezy-select-disabled'],
      !isDisabled && ((!trigger && (isHovered || !isClickOutside)) || (trigger === 'hover' && isHovered) || (trigger === 'click' && !isClickOutside)) && styles['sezy-select-active'],
      className,
    ),
    onClick: (e) => !isDisabled && !isLoading && onClick && onClick(e),
  }

  const toOptionElements = React.useCallback((selectedOptions) => {
    return <>
      {
        isMulti && (
          <div
            onClick={e => {
              isAllChecked.current = !isAllChecked.current;
              setSelectedOptions([]);
              onChange && onChange(isAllChecked.current ? 'all' : []);
            }}
          >
            <Checkbox
              className={styles['sezy-select-checkbox']}
              size={size}
              isChecked={isAllChecked.current}
            />
            {labelMap.allOptions}
          </div>
        )
      }
      {
        React.Children.map<any, any>(options, child => {
          const label = child.props.label;
          const htmlChildren = child.props.children;
          const value = child.props.value;
          const filteredMultiChoicesMap = isMulti && selectedOptions.filter(item => item.value !== value);
          const isChecked = isMulti && filteredMultiChoicesMap.length < selectedOptions.length;
          return (
            React.cloneElement(child, {
              ...child?.props,
              key: child.props.value,
              children: isMulti ? <>
                <Checkbox className={styles['sezy-select-checkbox']} size={size} isChecked={isAllChecked.current || isChecked} />{child?.props?.children}
              </> : child?.props?.children,
              onClick: (e) => {
                child?.props?.onClick && child?.props?.onClick(e);
                if (isMulti) {
                  isChecked
                    ? filteredMultiChoicesMap
                    : filteredMultiChoicesMap.push({
                      label: label ?? htmlChildren,
                      value,
                    });
                  setSelectedOptions([...filteredMultiChoicesMap]);
                  isAllChecked.current = numberOfItems === filteredMultiChoicesMap.length;
                  onChange && onChange(filteredMultiChoicesMap);
                }
                else {
                  valueInputRef?.current && (valueInputRef.current.value = value ?? '');
                  labelInputRef?.current && (labelInputRef.current.value = htmlChildren ?? '');
                  setClickOutside(true);
                  setHovered(false);
                  onChange && onChange(value);
                }
              },
            })
          )
        })
      }
    </>
  }, [options]);

  const localSearch = e => setOptions(children?.filter(child => {
    return ((child.props.label ?? child.props.children as string))?.toLowerCase().startsWith(e.target.value?.toLowerCase())
  }));

  const clickMultiChoicesTag = (selectedOptions, value) => e => {
    const filteredMultiChoicesMap = selectedOptions.filter(item => item.value !== value);
    isAllChecked.current = numberOfItems === filteredMultiChoicesMap.length;
    setSelectedOptions([...filteredMultiChoicesMap]);
    onChange && onChange(filteredMultiChoicesMap);
  }

  return (
    <div {...selectProps} ref={hoverRef}>
      <Input
        type={type}
        tagType={isMulti ? 'div' : 'input'}
        valueType='textValue'
        ref={clickOutsideRef}
        textRef={labelInputRef}
        size={size}
        postfix={<Caret size={toCaretSize[size] as any} />}
        placeholder={placeholder}
        isReadOnly={true}
        isLoading={isLoading}
        children={
          <div className={styles['sezy-select-tags']} data-placeholder={placeholder}>
            {
              isAllChecked.current
                ? labelMap.allOptions
                : !!selectedOptions.length && _.values(selectedOptions).map((item: any) => (
                  <Button
                    key={item.value}
                    size={toButtonSize[size] as any}
                    className={styles['sezy-select-tag']}
                    onClick={clickMultiChoicesTag(selectedOptions, item.value)}
                  >
                    {item.label}
                    <span>&#10005;</span>
                  </Button>
                ))}
          </div>
        }
      />
      <div className={Classnames(
        styles['sezy-select-options-wrapper'],
        isSearchable && styles['sezy-select-options-search'],
      )}>
        {
          isSearchable
          && <Input
            type={type}
            ref={searchInputRef}
            size={size}
            placeholder={labelMap.searchPlacholder}
            onKeyUp={e => onSearchChange ? onSearchChange((e.target as HTMLInputElement).value) : localSearch(e)} />
        }
        <List
          className={styles['sezy-select-options']}
          type={type}
          size={size}>
          {
            // isLoading
            //   ? <div>Loading...</div>
            //   : toOptionElements(selectedOptions)
            toOptionElements(selectedOptions)
          }
        </List>
      </div>
    </div>
  )
}

const toCaretSize = {
  s: 's2',
  m: 's1',
  l: 's',
}

const toButtonSize = {
  s: 's1',
  m: 's',
  l: 'm',
}
export default Select












