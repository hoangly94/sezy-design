import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css';

export interface LabelIProps {
  size?: 's' | 'm' | 'l',
  text?: string,
  icon?: React.ReactNode,
  className?: string,
  children?: React.ReactNode,
  onClick?: React.MouseEventHandler
}

const Label = ({
  size = 'm',
  icon,
  className,
  children,
  onClick,
  ...otherProps
}: LabelIProps): React.ReactElement => {
  return (
    <div
      className={Classnames(
        styles['sezy-label'],
        styles['sezy-label-' + size],
        className,
      )}
      onClick={onClick}
    >{icon}{children}</div>
  )
}


export default Label