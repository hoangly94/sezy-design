import React from 'react';
import Classnames from 'classnames';
import Button from '../button';
import styles from './_styles.module.css';
import Chevron from '../icon/solid/chevron';
import DoubleChevron from '../icon/solid/doubleChevron';

export interface PaginationIProps {
  type?: 'outline' | 'flat',
  size?: 's' | 'm' | 'l',
  defaultPage?: number,//defaut active page, default = 1
  pageSize?: number,//number item per page, default = 10
  total?: number,// total items
  step?: number,
  hasFirstLast?: boolean,
  isDisabled?: boolean,
  isLoading?: boolean,
  className?: string,
  onClick?: Function,
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
  className,
  onClick,
  ...otherProps
}: PaginationIProps) => {
  const [currentPage, setCurrentPage] = React.useState(defaultPage || 1);

  React.useEffect(() => {
    setCurrentPage(defaultPage || 1);
  }, [defaultPage]);

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

  const pageClick = (pageNumber, e) => {
    setCurrentPage(pageNumber);
    onClick && onClick(pageNumber, e);
  }

  const itemElements = maxPage > 0 && Array(lastPage - firstPage + 1).fill(0).map((item, index) => {
    const pageNumber = firstPage + index;
    return <Button
      key={pageNumber}
      type={type === 'flat' ? 'nude' : type}
      size={size}
      label={'' + pageNumber}
      onClick={e => pageClick(pageNumber, e)}
      isActive={currentPage === pageNumber}
    />;
  });

  const paginationProps = {
    ...otherProps,
    className: Classnames(
      styles['sezy-pagination'],
      styles['sezy-pagination-' + type],
      styles['sezy-pagination-' + size],
      className,
    ),
  }

  const isFirst = currentPage === 1;
  const isLast = currentPage === maxPage;
  const nextClick = e => {
    pageClick(currentPage + 1, e);
  }

  const prevClick = e => {
    pageClick(currentPage - 1, e);
  }

  const firstPageClick = e => {
    pageClick(1, e);
  }
  
  const lastPageClick = e => {
    pageClick(maxPage, e);
  }

  return (
    <div {...paginationProps}>
      {hasFirstLast && !!total && <DoubleChevron className={styles['sezy-pagination-2prev']} direction='left' size={toIconSize[size] as any} isDisabled={isFirst} onClick={firstPageClick} />}
      {!!total && <Chevron className={styles['sezy-pagination-prev']} direction='left' size={toIconSize[size] as any} isDisabled={isFirst} onClick={prevClick} />}
      {itemElements}
      {!!total && <Chevron className={styles['sezy-pagination-next']} direction='right' size={toIconSize[size] as any} isDisabled={isLast} onClick={nextClick} />}
      {hasFirstLast && !!total && <DoubleChevron className={styles['sezy-pagination-2next']} direction='right' size={toIconSize[size] as any} isDisabled={isLast} onClick={lastPageClick} />}
    </div>
  )
}

const toIconSize = {
  s: 's1',
  m: 's',
  l: 'm',
}


export default Pagination












