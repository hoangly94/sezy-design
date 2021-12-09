import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css';

export interface AutoCompleteIProps {
  type?: 'text' | undefined
  size?: 's' | 'm' | 'l',
  placement?: 't' | 'tr' | 'tl' | 'r' | 'rt' | 'rb' | 'b' | 'br' | 'bf' | 'l' | 'lt' | 'lb',
  className?: string,
  children?: React.ReactNode,
}

const AutoComplete = ({
  type = undefined,
  size = 'm',
  placement = 'bf',
  className,
  children,
  ...otherProps
}: AutoCompleteIProps, ref) => {

  const inputProps = {
    ...otherProps,
    className: Classnames(
      styles['sezy-autocomplete'],
      className,
    ),
  }

  return (
    <div>
    </div>
  )
}

export default React.forwardRef(AutoComplete)












