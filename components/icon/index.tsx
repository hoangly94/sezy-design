// export enum Type {
//   SOLID = 'solid',
//   LIGHT = 'light',
// } 
import React from 'react';

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
  ...otherProps
}: IProps): React.ReactElement => {
  if (name) {
    const Icon = require('./' + name).default;
    return <Icon {...otherProps} />;
  }
  return <></>
}

export default Icon
export {
  IProps as IconIProps,
}