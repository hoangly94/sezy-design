import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css';
import { Link } from "react-router-dom";
import CheckIcon from '../icon/light/check';


export interface CheckboxIProps {
  type?: 'outline' | 'flat',
  size?: 's1' | 's' | 'm' | 'l' | 'l1',
  label?: string,
  isChecked?: boolean,
  isDisabled?: boolean,
  className?: string,
  onClick?: React.MouseEventHandler,
}

const Checkbox = ({
  type = 'outline',
  size = 'm',
  label,
  isChecked = false,
  isDisabled = false,
  className,
  onClick,
  ...otherProps
}: CheckboxIProps) => {
  const checkboxProps = {
    ...otherProps,
    className: Classnames(
      styles['sezy-checkbox'],
      styles['sezy-checkbox-' + type],
      styles['sezy-checkbox-' + size],
      className,
    ),
    onClick: (e) => !isDisabled && onClick && onClick(e),
  }

  return (
    <span {...checkboxProps}>
      {isChecked && <CheckIcon fill='#888' size={toCheckSize[size] as any} />}
    </span>
  )
}

const toCheckSize = {
  s: 's1',
  m: 's',
  l: 'm',
}


export default Checkbox












