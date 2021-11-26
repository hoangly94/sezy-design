// export enum Type {
//   SOLID = 'solid',
//   LIGHT = 'light',
// } 
import Classnames from 'classnames';
import React from 'react';
import styles from './_styles.css';

interface IProps {
  type?: 'solid' | 'light',
  size?: 's2' | 's1' | 's' | 'm' | 'l' | 'l1' | 'l2',
  fill?: string,
  direction?: 'up' | 'right' | 'down' | 'left',
  isDisabled?: boolean,
  classes?: string,
  onClick?: React.MouseEventHandler;
  name?: 'bars' | 'caret' | 'checkCircle' | 'chevron' | 'circle' | 'circleDotCenter' | 'documentCheck' | 'exclamationCircle' | 'home' | 'homeLove' | 'threeDotsLoader' | 'user',
}

const IconWrapper = (
  rotateDegMapper,
  {
    type = 'light',
    direction = 'down',
    size = 'm',
    fill,
    classes,
    ...otherProps
  }: IProps,
  Svg: any
) => {

  return React.Children.map<any, any>(Svg, child => (
    React.cloneElement(child, {
      ...child?.props,
      className: Classnames(
        styles['sezy-icon'],
        styles['sezy-icon-' + size],
        classes,
      ),
      ...otherProps,
      style: {
        ...(
          rotateDegMapper &&
          {
            transform: `rotate(${rotateDegMapper[direction]}deg)`,
            transformOrigin: '50% 50%',
          }
        ),
        ...(fill && { fill: fill }),
      },
    })
  ));
}

export {
  IProps as IconIProps,
  IconWrapper,
}