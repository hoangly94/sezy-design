import React from 'react';
import styles from './_styles.module.css';


export interface CheckboxIProps {
  children: React.ReactNode,
}

const Shimmer = ({
  children
}: CheckboxIProps) => {
  return React.Children.map<any, any>(children, child => React.cloneElement(child, {
    ...child.props,
    className: styles['sezy-effect-shimmer']
  })
  )
}

export default Shimmer












