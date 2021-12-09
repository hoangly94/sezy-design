import * as React from 'react'
import Classnames from 'classnames';
import styles from './_styles.module.css';

export interface ColIProps {
  grid?: number,
  className?: string,
  children?: React.ReactNode,
};

const Col = ({
  children,
  grid,
  className,
  ...otherProps
}: ColIProps): React.ReactElement => {

const props = {
  ...otherProps,
  className:Classnames(
    styles['sezy-col'],
    styles['sezy-col-'+ grid],
    className,
  ),
};

return (
  <div {...props}>
    {children}
  </div>
)
}

export default Col
