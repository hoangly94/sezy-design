import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css';
import CheckIcon from '../icon/light/check';

type TValue = String | number | boolean;

export interface CheckboxIProps {
  type?: 'outline' | 'flat',
  size?: 's1' | 's' | 'm' | 'l' | 'l1',
  label?: string,
  values?: [TValue, TValue],
  value?: boolean,
  isDisabled?: boolean,
  className?: string,
  onChange?: (isChecked: boolean) => void,
}

const Checkbox = ({
  type = 'outline',
  size = 'm',
  label,
  values = [false, true],
  value = false,
  isDisabled = false,
  className,
  onChange,
  ...otherProps
}: CheckboxIProps) => {
  const [isChecked, setChecked] = React.useState(value);

  React.useEffect(() => {
    !isDisabled && onChange && onChange(isChecked)
  }, [isChecked]);

  React.useEffect(() => {
    setChecked(value);
  }, [value]);

  return (
    <span
      className={Classnames(
        styles['sezy-checkbox'],
        styles['sezy-checkbox-' + type],
        styles['sezy-checkbox-' + size],
        className,
      )}
      onClick={e => !isDisabled && setChecked(!isChecked)}
      {...otherProps}
    >
      {isChecked && <CheckIcon fill='#888' size={toCheckSize[size] as any} />}
    </span>
  )
}

const toCheckSize = {
  s: 's1',
  m: 's',
  l: 'm',
}


export default Checkbox












