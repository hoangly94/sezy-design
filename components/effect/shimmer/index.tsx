import React from 'react';
import styles from './_styles.module.css';


export interface CheckboxIProps {
  isLoading:boolean,
  children: React.ReactNode,
}

const Shimmer = ({
  isLoading = false,
  children
}: CheckboxIProps) => {
  return React.Children.map<any, any>(children, child => React.cloneElement(child, {
    ...child.props,
    className: isLoading && styles['sezy-effect-shimmer']
  })
  )
}

export default Shimmer












