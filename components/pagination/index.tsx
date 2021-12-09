import React from 'react';
import Classnames from 'classnames';
import Button from '../button';
import styles from './_styles.module.css';
import Chevron from '../icon/solid/chevron';

interface IProps {
  type?: 'outline' | 'flat',
  size?: 's' | 'm' | 'l',
  defaultPage?: number,//defaut active page, default = 1
  pageSize?: number,//number item per page, default = 10
  total?: number,// total items
  step?: number,
  hasFirstLast?: boolean,
  isDisabled?: boolean,
  isLoading?: boolean,
  classes?: string,
  onClick?: React.MouseEventHandler,
}

const Pagination = ({
  type = 'outline',
  size = 'm',
  defaultPage,
  pageSize = 10,
  total = 0,
  step = 2,
  hasFirstLast = false,
  isDisabled = false,
  isLoading = false,
  classes,
  onClick,
  ...otherProps
}: IProps) => {

  const [currentPage, setCurrentPage] = React.useState(defaultPage ?? 1);

  React.useEffect(() => {
    setCurrentPage(currentPage);
  }, [currentPage]);

  const maxPage = Math.ceil(total / pageSize);

  const [firstPage, lastPage] = (() => {
    if (maxPage <= step * 2 + 1)
      return [1, maxPage];
    if (currentPage <= step)
      return [1, step * 2 + 1];
    if (currentPage + step > maxPage)
      return [maxPage - step * 2, maxPage];
    return [currentPage - step, currentPage + step];
  })();

  const pageClick = pageNumber => {
    setCurrentPage(pageNumber);
  }

  const itemElements = maxPage > 0 && Array(lastPage - firstPage + 1).fill(0).map((item, index) => {
    const pageNumber = firstPage + index;
    return <Button
      key={pageNumber}
      type={type}
      size={size}
      label={'' + pageNumber}
      onClick={event => { pageClick(pageNumber); onClick && onClick(event); }}
      isActive={currentPage === pageNumber}
    />;
  });

  const paginationProps = {
    ...otherProps,
    className: Classnames(
      styles['sezy-pagination'],
      styles['sezy-pagination-' + type],
      styles['sezy-pagination-' + size],
      classes,
    ),
  }

  const isFirst = currentPage === 1;
  const isLast = currentPage === maxPage;
  const nextClick = e => {
    setCurrentPage(currentPage+1);
  }

  const prevClick = e => {
    setCurrentPage(currentPage-1);
  }

  return (
    <div {...paginationProps}>
      <Chevron direction='left' size={toIconSize[size] as any} isDisabled={isFirst} onClick={prevClick} />
      {itemElements}
      <Chevron direction='right' size={toIconSize[size] as any} isDisabled={isLast} onClick={nextClick} />
    </div>
  )
}

const toIconSize = {
  s: 's1',
  m: 's',
  l: 'm',
}


export default Pagination
export {
  IProps as PaginationIProps,
}












