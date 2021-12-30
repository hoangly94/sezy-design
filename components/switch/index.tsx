import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css';

export interface SwitchIProps {
  type?: 'outline' | 'flat',
  size?: 's' | 'm' | 'l',
  color?: string, // only support hex
  isActive?: boolean,
  isDisabled?: boolean,
  className?: string,
  onChange?: (key: any) => void,
}

const Switch = ({
  type = 'flat',
  size = 'm',
  color,
  isActive = false,
  isDisabled = false,
  className,
  onChange,
  ...otherProps
}: SwitchIProps) => {
  const [active, setActive] = React.useState(isActive);

  React.useEffect(() => {
    setActive(isActive);
  }, [isActive]);

  const style = color && type === 'outline'
    ? {
      color: color,
      backgroundColor: `${color}28`,
      borderColor: color,
    }
    : {};

  return (
    <span
      className={Classnames(
        styles['sezy-switch'],
        styles['sezy-switch-' + type],
        styles['sezy-switch-' + size],
        active && styles['sezy-switch-active'],
        className,
      )}
      onClick={(e) => {
        if(!isDisabled){
          onChange && onChange(!active);
          setActive(!active);
        }
      }}
      {...(isDisabled && { disabled: true })}
    />
  )
}

export default Switch












