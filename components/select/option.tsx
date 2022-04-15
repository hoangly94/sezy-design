import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css';
import Checkbox from '../checkbox';
import _ from 'lodash';

export interface OptionIProps {
  label?: string,
  value: string,
  active?: boolean,
  onClick?: React.MouseEventHandler,
  onChange?: Function,
  children?: React.ReactNode,
  className?: string,
}

const Option = ({
  onClick,
  onChange,
  active = false,
  children,
  className,
  ...otherProps
}: OptionIProps) => {
  return (
    <div
      className={Classnames(
        className,
      )}
      onClick={onClick}
      {...otherProps}
      {...{active}}
    >
      {children}
    </div>
  )
}

export default Option












