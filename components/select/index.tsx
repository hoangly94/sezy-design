import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css';
import List, { ListIProps } from '../list';
import Input, { InputIProps } from '../input';
import { useClickOutside, useHover } from '../../hooks';
import Caret from '../icon/solid/caret';
import Checkbox from '../checkbox';
import { OptionIProps } from './option';
import _ from 'lodash';
import Tag from '../tag';

type TSelectedItem = {
  text: string | number,
  value: string | number,
}
type TLabel = {
  allOptions?: string,
  searchPlaceholder?: string,
}

export interface SelectIProps {
  type?: 'flat' | 'outline' | 'nude',
  size?: 's' | 'm' | 'l',
  labels?: TLabel,
  selectedItems?: TSelectedItem[]
  placeholder?: string,
  isDisabled?: boolean,
  isLoading?: boolean,
  isSearchable?: boolean,
  isMulti?: boolean,
  limitScrollItems?: number,
  placement?: 't' | 'tr' | 'tl' | 'r' | 'rt' | 'rb' | 'b' | 'br' | 'bf' | 'l' | 'lt' | 'lb',
  trigger?: 'hover' | 'click',
  className?: string,
  onClick?: React.MouseEventHandler,
  onSearchChange?: (key: string) => void,
  onChange?: Function,
  InputProps?: InputIProps,
  ListProps?: ListIProps,
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
  limitScrollItems = 10,
  placement = 'bf',
  trigger,
  className,
  onClick,
  onSearchChange,
  onChange,
  children = [],
  InputProps,
  ListProps,
  ...otherProps
}: SelectIProps) => {
  const valueInputRef: React.MutableRefObject<any> = React.useRef(null)
  const searchInputRef: React.MutableRefObject<any> = React.useRef(null)
  const { ref: clickOutsideRef, isClickOutside, setClickOutside } = useClickOutside({ ref: valueInputRef });
  const { ref: hoverRef, isHovered, setHovered } = useHover();
  const labelInputRef: React.MutableRefObject<any> = React.useRef(null);
  const optionListRef: React.MutableRefObject<any> = React.useRef(null);
  const isAllChecked = React.useRef(false);
  const [selectedOptions, setSelectedOptions] = React.useState<TSelectedItem[]>(selectedItems);
  const [limitItems, setLimitItems] = React.useState(limitScrollItems);
  const [options, setOptions] = React.useState<React.ReactElement<OptionIProps>[]>(children);
  const numberOfItems = React.Children.count(children);

  React.useEffect(() => {
    optionListRef?.current && (optionListRef.current.scrollTo(0, 0));
    setOptions(children);
    setDefaultValue();
  }, [children])

  React.useEffect(() => {
    optionListRef.current?.addEventListener("scroll", onOptionScroll);
    return () => {
      optionListRef.current?.removeEventListener("scroll", onOptionScroll);
    };
  }, [optionListRef, limitItems]);

  const onOptionScroll = (e) => {
    if ((e.target.scrollTop + e.target.offsetHeight) >= e.target.scrollHeight - 2) {
      setLimitItems(((limitItems / limitScrollItems) + 1) * limitScrollItems);
    }
  }

  const labelMap = Object.assign({
    allOptions: 'All',
    searchPlaceholder: 'Search...'
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
  const setDefaultInput = (value: string, label: string) => {
    valueInputRef?.current && (valueInputRef.current.value = value ?? '');
    labelInputRef?.current && (labelInputRef.current.value = label ?? '');
  };

  const setDefaultValue = () => {
    options.forEach((option) => {
      option.props.active && setDefaultInput(option.props.value, '' + (option.props.label || option.props.children));
    })
  }

  const clickOption = (value: string, label: string) => {
    setDefaultInput(value, label);
    setClickOutside(true);
    setHovered(false);
    onChange && onChange(value);
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
              value={isAllChecked.current}
            />
            {labelMap.allOptions}
          </div>
        )
      }
      {
        React.Children.map<any, any>(options, (child, index) => {
          const label = child.props.label;
          const htmlChildren = child.props.children;
          const value = child.props.value;
          const filteredMultiChoicesMap = isMulti && selectedOptions.filter(item => item.value !== value);
          const isChecked = isMulti && filteredMultiChoicesMap.length < selectedOptions.length;
          if (index >= limitItems)
            return;
          return (
            React.cloneElement(child, {
              ...child?.props,
              key: `${child.props.value}.${index}`,
              children: isMulti ? <>
                <Checkbox className={styles['sezy-select-checkbox']} size={size} value={isAllChecked.current || isChecked} />{child?.props?.children}
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
                  // isAllChecked.current = numberOfItems === filteredMultiChoicesMap.length;
                  onChange && onChange(filteredMultiChoicesMap);
                }
                else {
                  clickOption(value, htmlChildren);
                }
              },
            })
          )
        })
      }
    </>
  }, [options, limitItems]);

  const localSearch = e => {
    optionListRef?.current && (optionListRef.current.scrollTo(0, 0));
    e.value && setOptions(children?.filter(child => {
      return ((child.props.label ?? child.props.children as string))?.toLowerCase().startsWith(e.value?.toLowerCase())
    }))
  };

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
        size={size}
        postfix={<Caret size={toCaretSize[size] as any} />}
        placeholder={placeholder}
        isReadOnly={true}
        isLoading={isLoading}
        {...InputProps}
        tagType={isMulti ? 'div' : 'input'}
        valueType='textValue'
        ref={clickOutsideRef}
        textRef={labelInputRef}
      >
        <div className={styles['sezy-select-tags']} data-placeholder={placeholder}>
          {
            isAllChecked.current
              ? labelMap.allOptions
              : !!selectedOptions.length && _.values(selectedOptions).map((item: any) => (
                <Tag
                  key={item.value}
                  size={toButtonSize[size] as any}
                  isClearable={true}
                  onClick={clickMultiChoicesTag(selectedOptions, item.value)}
                >
                  {item.label}
                </Tag>
              ))}
        </div>
      </Input>
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
            placeholder={labelMap.searchPlaceholder}
            onKeyUp={e => onSearchChange ? onSearchChange(e.value) : localSearch(e)}
          />
        }
        <List
          ref={optionListRef}
          type={type}
          size={size}
          {...ListProps}
          className={Classnames(
            styles['sezy-select-options'],
            ListProps?.className
          )}
        >
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












