import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css';

export interface RangeIProps {
  type?: 'flat' | 'outline' | 'nude',
  size?: 's' | 'm' | 'l',
  min: number,
  max: number,
  value?: number;
  labelRef?: React.MutableRefObject<any>,
  isDisabled?: boolean,
  isLoading?: boolean,
  isClearable?: boolean,
  isReadOnly?: boolean,
  className?: string,
  onClick?: (e: any) => void,
  onChange?: (e: any) => void,
  children?: React.ReactNode,
}

const Range = ({
  type = 'outline',
  size = 'm',
  min,
  max,
  value = 0,
  labelRef,
  isDisabled = false,
  isLoading = false,
  isClearable = false,
  isReadOnly = false,
  className,
  onClick,
  onChange,
  children,
  ...otherProps
}: RangeIProps, ref) => {
  // const toNodeFocusRef = React.useRef(false);
  // const [rangeWidth, setRangeWidth] = React.useState(value);

  return (
    // <div
    //   ref={ref}
    //   className={Classnames(
    //     styles['sezy-range'],
    //     className
    //   )}
    //   onClick={onClick}
    //   onMouseMove={e => console.log(e)}
    // >
    //   <div
    //     className={Classnames(
    //       styles['sezy-range-bar'],
    //     )}
    //     style={{
    //       width: rangeWidth,
    //     }}
    //   />
    //   <span
    //     className={Classnames(
    //       styles['sezy-range-node'],
    //     )}
    //     onMouseDown={() => { toNodeFocusRef.current = true }}
    //     onMouseUp={() => { toNodeFocusRef.current = false }}
    //   />
    // </div>
    <div
      className={Classnames(
        styles['sezy-range-wrapper'],
        className
      )}
    >
      <input
        type='range'
        ref={ref}
        min={min}
        max={max}
        className={Classnames(
          styles['sezy-range'],
        )}
        onChange={onChange}
      />
      <span
        ref={labelRef}
        className={Classnames(
          styles['sezy-range-label'],
        )}
      />
    </div>
  )
}
export default React.forwardRef(Range)












