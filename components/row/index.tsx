import * as React from 'react'
import Classnames from 'classnames';
import styles from './_styles.module.css'
import Col from '../col'
import _ from 'lodash';

type Gutter = {
  xs?: number,
  sm?: number,
  md?: number,
  lg?: number,
  xl?: number,
  xxl?: number,
}

export interface RowIProps {
  children?: React.ReactNode,
  gaps?: [any, any],
  gutter?: Gutter,
  className?: string,
};

const Row = ({
  children,
  gaps = [0, 0],
  gutter,
  className,
  ...otherProps
}: RowIProps): React.ReactElement => {
  const childrenSize = React.Children.count(children);
  const numberGridSet = _.sum(React.Children.map<React.ReactNode, any>(children, child => child?.props?.grid ?? 0));

  // const numberGridSet = _.sum(React.Children.map<React.ReactNode, any>(children, child => child?.props?.grid ?? 0));
  // const numberChildrenWithoutGrid = React.Children.toArray(children).filter((child:any) => !child?.props?.grid).length;
  // const defaultGrid = Math.ceil((24-numberGridSet)/numberChildrenWithoutGrid);
  const gutterValues = _.values(gutter);
  const props = {
    ...otherProps,
    className: Classnames(
      styles['sezy-row'],
      numberGridSet ? '' : styles['sezy-row-' + childrenSize],
      gutter && _.keys(gutter).map((v, k) => styles[`sezy-row-${v}-${gutterValues[k]}`]),
      className,
    ),
    style: {
      // margin: '0 -' + (isNaN(gaps[0]) ? gaps[0] : gaps[0] + 'rem'),
    }
  };
  return (
    <div {...props}
      style={{
        marginLeft: '-' + (isNaN(gaps[0]) ? gaps[0] : gaps[0] + 'rem'),
        marginRight: '-' + (isNaN(gaps[0]) ? gaps[0] : gaps[0] + 'rem'),
        rowGap: '0 ' + (isNaN(gaps[1]) ? gaps[1] : gaps[1] + 'rem'),
      }}
    >
      {
        React.Children.map<React.ReactNode, any>(children, child => (
          <child.type
            {...child.props}
            style={{
              paddingLeft: (isNaN(gaps[0]) ? gaps[0] : gaps[0] + 'rem'),
              paddingRight: (isNaN(gaps[0]) ? gaps[0] : gaps[0] + 'rem'),
              ...child?.props?.style,
            }}
          >
            <div>
              {child.props.children}
            </div>
          </child.type>
        ))
      }
    </div >
  )
}

export default Row
