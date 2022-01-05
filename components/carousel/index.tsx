import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css';
import ChevronIcon from '../icon/solid/chevron';
import _ from 'lodash';

export interface CarouselIProps {
  // type?: 'outline' | 'flat',
  size?: 's' | 'm' | 'l',
  deafultStep?: number, // slide will be shown
  autoplayTime?: string, // no set no auto play
  hasDots?: boolean,
  isInfinity?: boolean,
  isFull?: boolean,
  $prev?: React.ReactNode,
  $next?: React.ReactNode,
  className?: string,
  onChange?: (step: number) => void,
  children?: React.ReactNode
}

const Carousel = ({
  // type = 'flat',
  size = 'm',
  deafultStep = 1,
  autoplayTime,
  hasDots = false,
  isInfinity = true,
  isFull = true,
  $prev,
  $next,
  className,
  onChange,
  children,
  ...otherProps
}: CarouselIProps) => {
  const [step, setStep] = React.useState(deafultStep);

  React.useEffect(() => {
    onChange && onChange(step)
  }, [step]);

  React.useEffect(() => {
    setStep(step);
  }, [deafultStep]);

  const stepAction = React.useRef(0);

  const newStep = (step: number, add: number) => {
    const newStep = (() => {
      const newStep = step + add;
      const size = React.Children.count(children);
      if (newStep > size)
        return 1
      if (newStep < 1)
        return size
      return newStep
    })();
    stepAction.current = add;
    setStep(newStep);
  }
  const childrenCount = React.Children.count(children);
  const centerRange = Math.floor(childrenCount / 2);
  const centerPoint = childrenCount % 2 === 0 ? centerRange - 1 : centerRange;

  const slideItemIndex = _.range(childrenCount).map((v, i) => (((childrenCount + (step - centerRange) + i) - 1) % childrenCount) + 1);
  return (
    <div
      className={Classnames(
        styles['sezy-carousel'],
        styles['sezy-carousel-' + size],
        className
      )}
      {...otherProps}
    >
      <div
        className={Classnames(
          styles['sezy-carousel-items'],
        )}
        {...otherProps}
      >
        {
          React.Children.map<any, any>(children, (child, childIndex) => {
            const newItemPosition = slideItemIndex.indexOf(childIndex + 1) - centerPoint;
            const style = {
              ...child.props.style,
              left: `${newItemPosition}00%`,
              zIndex: (stepAction.current === 1 ? -newItemPosition : newItemPosition) + childrenCount,
            }
            return (
              React.cloneElement(child, {
                ...child.props,
                className: Classnames(
                  child.props.className,
                  styles['sezy-carousel-item'],
                ),
                style
              })
            )
          })
        }
      </div>
      <span
        className={styles['sezy-carousel-prev']}
        onClick={() => (isInfinity || step > 1) && newStep(step, -1)}
      >
        {$prev || <ChevronIcon
          direction='left'
          size={size}
          isDisabled={!isInfinity && step === 1}
        />}
      </span>
      <span
        className={styles['sezy-carousel-next']}
        onClick={() => (isInfinity || step < React.Children.count(children)) && newStep(step, 1)}
      >
        {$next || <ChevronIcon
          direction='right'
          size={size}
          isDisabled={!isInfinity && step === React.Children.count(children)}
        />}
      </span>
    </div>
  )
}

export default Carousel












