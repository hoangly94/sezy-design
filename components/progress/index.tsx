import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css';
import { Link } from "react-router-dom";
import ThreeDotsLoader from '../icon/solid/threeDotsLoader';


export interface ProgressIProps {
  type?: 'outline' | 'flat' | 'nude',
  size?: 's1' | 's' | 'm' | 'l' | 'l1',
  value?: number,
  hasLabel?: boolean,
  className?: string,
}

const Progress = ({
  type = 'flat',
  size = 'm',
  value = 0,
  hasLabel = true,
  className,
  ...otherProps
}: ProgressIProps) => {
  // const child = isLoading
  //   ? <ThreeDotsLoader size='l2' />
  //   : <>{prefix}{label ?? children}{postfix}</>;

  return (
    <div
      {...otherProps}
      className={Classnames(
        styles['sezy-progress'],
        styles['sezy-button-' + type],
        styles['sezy-button-' + size],
        // isDisabled && styles['sezy-button-disabled'],
        className,
      )}
    >
      <div
        className={Classnames(
          styles['sezy-progress-bar'],
          className,
        )}
        style={{
          width: `${value}%`,
        }}
      >
        {
          hasLabel && <span
            className={Classnames(
              styles['sezy-progress-value'],
              className,
            )} >{`${value}%`}</span>
        }
      </div>
    </div >
  )
}

export default Progress












