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

const Icon = ({
  name,
  size = 'm',
  classes,
  ...otherProps
}: IProps): React.ReactElement => {
  if (name) {
    const Icon = require('./' + name).default;
    return <Icon
      className={Classnames(
        styles['sezy-svg-' + size],
        classes,
      )}
      {...otherProps} />;
  }
  return <></>
}

export default Icon
export {
  IProps as IconIProps,
}