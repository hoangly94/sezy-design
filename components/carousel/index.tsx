import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css';
import ChevronIcon from '../icon/solid/chevron';

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

  const prevStep = React.useRef(deafultStep);

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
    prevStep.current = step;
    setStep(newStep);
  }

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
          React.Children.map<any, any>(children, (child, index) => (
            React.cloneElement(child, {
              ...child.props,
              className: Classnames(
                child.props.className,
                styles['sezy-carousel-item'],
                step === (index + 1) && prevStep.current > step && styles['sezy-carousel-item-prev'],
                step === (index + 1) && prevStep.current < step && styles['sezy-carousel-item-next'],
              ),
              style: {
                ...child.props.style,
              }
            })
          ))
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












