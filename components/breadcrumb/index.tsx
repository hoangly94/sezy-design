import * as React from 'react';
import Classnames from 'classnames';
import styles from './_styles.css';
import * as Svg from "../icon";
import HomeSvg from "../icon/home";
import Link from "../link";
import {Classes}from '../_base';
// import { useLocation } from 'react-router';

interface IProps{
  type?: 'breadcrumbs',
  size?: 's' | 'm' | 'l',
  homeContent?: React.ReactNode,
  separator?: React.ReactNode,
  classes?: string,
  mapper: Object,
};

const Breadcrumb = (props: IProps): React.ReactElement => {
  const {
    type = 'breadcrumbs',
    size = 'm',
    homeContent,
    mapper,
    separator = '>',
    classes,
    ...otherProps
  } = props;

  // const location = useLocation();

  const componentProps = {
    ...otherProps,
    className:Classnames(
      // styles[type],
      // styles['breadcrumbs-'+size],
      'flex',
      classes,
    ),
    // style:{
    //   borderBottom: '1px solid #cdcdcd',
    // }
  };


  const reducePathnameToLinkElemets = (result, currentKey) => {
    if (!currentKey && result.mapper){
      return {
        ...result,
        elements:[
          <Link key={'link'+currentKey} isExternal={true} href="/">
            {homeContent ?? <HomeSvg fill='#383838' size="l"/>}
          </Link>
        ]
      };
    }
    const newMapper = result.mapper[currentKey];
    const linkProps = {
    };
    return {
      elements: [
        ...result.elements,
        // <Chevron key={'key'+currentKey} {...chevronProps} />,
        separator,
        <Link 
          key={'link'+currentKey} 
          label= {newMapper?.name || currentKey}
          href={ newMapper?.url}
          isExternal={true}
        />
      ],
      mapper: newMapper
    }
  }

  return (
    <nav {...componentProps}>
      { window.location.pathname?.split('/').reduce(reducePathnameToLinkElemets, { elements: [], mapper: mapper }).elements}
    </nav>
  )
}

export default Breadcrumb
export {
  IProps as BreadcrumbIProps,
}