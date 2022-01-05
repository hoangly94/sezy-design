import * as React from 'react'
import Classnames from 'classnames';
import _ from 'lodash';
import styles from './_styles.module.css';

type Gutter = {
  xs?: number,
  sm?: number,
  md?: number,
  lg?: number,
  xl?: number,
  xxl?: number,
}

export interface ColIProps {
  grid?: number,
  gutter?: Gutter,
  className?: string,
  children?: React.ReactNode,
};

const Col = ({
  children,
  grid,
  gutter,
  className,
  ...otherProps
}: ColIProps): React.ReactElement => {
  const gutterValues = _.values(gutter);
  return (
    <div
      {...otherProps}
      className={Classnames(
        styles['sezy-col'],
        styles['sezy-col-' + grid],
        gutter && _.keys(gutter).map((v, k) => styles[`sezy-col-${v}-${gutterValues[k]}`]),
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Col
