import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css';
import Label from '../label';
import _ from 'lodash';

export interface TooltipIProps {
  size?: 's' | 'm' | 'l',
  content?: string,
  isDisabled?: boolean,
  // placement?: 't' | 'tr' | 'tl' | 'r' | 'rt' | 'rb' | 'b' | 'br' | 'bf' | 'l' | 'lt' | 'lb',
  className?: string,
  children?: React.ReactElement,
}

const Tooltip = ({
  size = 'm',
  content = '',
  isDisabled = false,
  // placement = 't',
  className,
  children,
  ...otherProps
}: TooltipIProps) => {
  return (
    <div
      {...otherProps}
      className={Classnames(
        styles['sezy-tooltip-wrapper'],
        className,
      )}
    >
      {children}
      <Label
        size={size}
        className={Classnames(
          styles['sezy-tooltip'],
          styles['sezy-tooltip-' + size],
          // styles['sezy-tooltip-placement-' + placement],
          className,
        )}
      >
        {content}
      </Label>
    </div>
  )
}
export default Tooltip












