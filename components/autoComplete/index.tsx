import * as React from 'react';
import Classnames from 'classnames';
import styles from './_styles.css';

interface IProps {
  type?: 'text' | undefined
  size?: 's' | 'm' | 'l',
  placement?: 't' | 'tr' | 'tl' | 'r' | 'rt' | 'rb' | 'b' | 'br' | 'bf' | 'l' | 'lt' | 'lb',
  classes?: string,
  children?: React.ReactNode,
}

const AutoComplete = ({
  type = undefined,
  size = 'm',
  placement = 'bf',
  classes,
  children,
  ...otherProps
}: IProps, ref) => {

  const inputProps = {
    ...otherProps,
    className: Classnames(
      styles['sezy-autocomplete'],
      classes,
    ),
  }

  return (
    <div>
    </div>
  )
}

export default AutoComplete;
export {
  IProps as AutoCompleteIProps,
}












