import * as React from 'react'
import Classnames from 'classnames';
// import styles from './_styles.css';
import {Classes}from '../_base';

interface IProps {
  grid?: number,
  classes?: string,
  children?: React.ReactNode,
};

const Block = ({
  children,
  // grid,
  classes,
  ...otherProps
}: IProps): React.ReactElement => {

const props = {
  ...otherProps,
  className:Classnames(
    classes,
  ),
};

return (
  <div {...props}>
    {children}
  </div>
)
}

export default Block
export {
  IProps as BlockIProps,
}
