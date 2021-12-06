import * as React from 'react'
import Classnames from 'classnames';
import styles from './_styles.css';

interface IProps {
  grid?: number,
  classes?: string,
  children?: React.ReactNode,
};

const Col = ({
  children,
  grid,
  classes,
  ...otherProps
}: IProps): React.ReactElement => {

const props = {
  ...otherProps,
  className:Classnames(
    styles['sezy-col'],
    styles['sezy-col-'+ grid],
    classes,
  ),
};

return (
  <div {...props}>
    {children}
  </div>
)
}

export default Col
export {
  IProps as ColIProps,
}
