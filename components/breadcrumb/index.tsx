import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css';
import Home from '../icon/solid/home';
import Link from "../link";

// import { useLocation } from 'react-router';

export interface BreadcrumbIProps {
  type?: 'breadcrumbs',
  size?: 's' | 'm' | 'l',
  homeIcon?: React.ReactNode,
  separator?: React.ReactNode,
  className?: string,
  mapper: Object,
};

const Breadcrumb = (props: BreadcrumbIProps): React.ReactElement => {
  const {
    type = 'breadcrumbs',
    size = 'm',
    homeIcon,
    mapper,
    separator = '>',
    className,
    ...otherProps
  } = props;

  const componentProps = {
    ...otherProps,
    className: Classnames(
      styles['breadcrumbs'],
      // styles['breadcrumbs-'+size],
      className,
    ),
  };

  const reducePathnameToLinkElemets = (result, currentKey) => {
    if (!currentKey && result.mapper) {
      return {
        ...result,
        elements: [
          <Link key={'link' + currentKey} isExternal={true} href="/">
            {homeIcon || <Home size="l" />}
          </Link>
        ]
      };
    }
    const newMapper = result.mapper[currentKey];

    return {
      elements: [
        ...result.elements,
        // <Chevron key={'key'+currentKey} {...chevronProps} />,
        separator,
        <Link
          key={'link' + currentKey}
          label={newMapper?.name || currentKey}
          href={newMapper?.url}
          isExternal={true}
        />
      ],
      mapper: newMapper
    }
  }

  return (
    <nav {...componentProps}>
      {window.location.pathname?.split('/').reduce(reducePathnameToLinkElemets, { elements: [], mapper: mapper }).elements}
    </nav>
  )
}

export default Breadcrumb