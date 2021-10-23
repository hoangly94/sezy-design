import * as React from 'react';
import Classnames from 'classnames';
import styles from './_styles.css';
import {Classes}from '../_base';
import { Link } from "react-router-dom";

interface IProps {
  type?: 'default' | 'outline' | 'flat',
  size?: 's' | 'm' | 'l',
  href?: string,
  isLoading?: boolean,
  classes?: string,
  onClick?: React.MouseEventHandler,
  children?: React.ReactNode,
}

const List = ({
    type = 'default',
    size,
    href = '',
    isLoading = false,
    classes,
    onClick,
    children,
    ...otherProps
  }: IProps) => {

  const childrenSize = React.Children.count(children);
  
  const listProps = {
    ...otherProps,
    className:Classnames(
      styles['sezy-list'],
      styles['sezy-list-'+type],
      styles['sezy-list-'+size],
      classes,
    ),
  }
  
  return (
    <div {...listProps}>
      {children}
    </div>
  )
}

export default List
export {
  IProps as ListIProps,
}











