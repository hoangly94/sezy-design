import * as React from 'react'
import Classnames from 'classnames';
import styles from './_styles.module.css'
import Col from '../col'
import _ from 'lodash';

export interface RowIProps {
  children?: React.ReactNode,
  gaps?: [any, any],
  className?: string,
};

const Row = ({
  children,
  gaps = [0, 0],
  className,
  ...otherProps
}: RowIProps): React.ReactElement => {
  const childrenSize = React.Children.count(children);
  const numberGridSet = _.sum(React.Children.map<React.ReactNode, any>(children, child => child?.props?.grid ?? 0));

  // const numberGridSet = _.sum(React.Children.map<React.ReactNode, any>(children, child => child?.props?.grid ?? 0));
  // const numberChildrenWithoutGrid = React.Children.toArray(children).filter((child:any) => !child?.props?.grid).length;
  // const defaultGrid = Math.ceil((24-numberGridSet)/numberChildrenWithoutGrid);
  const props = {
    ...otherProps,
    className: Classnames(
      styles['sezy-row'],
      numberGridSet ? '' : styles['sezy-row-' + childrenSize],
      className,
    ),
    style: {
      // margin: '0 -' + (isNaN(gaps[0]) ? gaps[0] : gaps[0] + 'rem'),
    }
  };
  return (
    <div {...props}>
      {React.Children.map<React.ReactNode, any>(children, child => (
        React.cloneElement(child, {
        style: {
          padding: '0 ' + (isNaN(gaps[0]) ? gaps[0] : gaps[0] + 'rem'),
          rowGap: '0 ' + (isNaN(gaps[1]) ? gaps[1] : gaps[1] + 'rem'),
          ...child?.props?.style,
        }
        })
      ))}
    </div>
  )
}

export default Row
