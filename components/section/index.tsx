import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css';
import ThreeDotsLoader from '../icon/solid/threeDotsLoader';

export interface SectionIProps {
  className?: string,
  children?: React.ReactNode,
}

const Section = ({
  className,
  children,
  ...otherProps
}: SectionIProps) => {
  const sectionProps = {
    ...otherProps,
    className: Classnames(
      styles['sezy-section'],
      className,
    ),
  }

  return (
    <section {...sectionProps}>
      <div>
        {children}
      </div>
    </section >
  )
}


export default Section












