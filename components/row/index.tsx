import * as React from 'react'
import Classnames from 'classnames';
import styles from './_styles.css'
import {Classes}from '../_base';

interface IProps {
  children?: React.ReactNode,
  gaps?: [any,any],
  classes?: string,
};

const Row = ({
    children,
    gaps = [0,0],
    classes,
    ...otherProps
  }: IProps): React.ReactElement => {

  const childrenSize = React.Children.count(children);
  
  const props = {
    ...otherProps,
    className:Classnames(
      styles['sezy-row'],
      styles['sezy-row-'+ childrenSize],
      classes,
    ),
    style:{
      margin: '0 -'+ (isNaN(gaps[0]) ? gaps[0] : gaps[0] + 'px'),
    }
  };

  return (
    <div {...props}>
      {React.Children.map(children, child => (
          React.cloneElement(child as any, {style:{
            padding: '0 '+ (isNaN(gaps[0]) ? gaps[0] : gaps[0] + 'px'),
            rowGap: '0 '+ (isNaN(gaps[1]) ? gaps[1] : gaps[1] + 'px'),
          }})
      ))}
    </div>
  )
}

export default Row
export {
  IProps as RowIProps,
}
