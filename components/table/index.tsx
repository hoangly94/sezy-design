import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css';
import ThreeDotsLoader from '../icon/solid/threeDotsLoader';

export interface TableIProps {
  type?: 'flat' | 'outline',
  size?: 's' | 'm' | 'l',
  columns?: TableColumn[],
  data?: TableData[],
  className?: string,
}

type TableColumn = {
  key?: string,
  index: string,
  label: string,
  isDisabled?: boolean,
  filter?: Object,
  sort?: Object,
  search?: Object,
}

type TableData = Object & {
  key?: string,
  render?: Function,
}

const Table = ({
  type = 'outline',
  size = 'm',
  columns,
  data,
  className,
  ...otherProps
}: TableIProps) => {
  const keyPrefix = 'table.';
  const tableProps = {
    ...otherProps,
    className: Classnames(
      styles['sezy-table'],
      styles['sezy-table-' + type],
      styles['sezy-table-' + size],
      className,
    ),
  }

  return (
    <table {...tableProps}>
      <thead>
        <tr>
          {columns?.map((c, index) => {
            return <th key={keyPrefix + 'h.' + (c.key ?? `${c.index}.${index}`)}>{c.label}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data?.map((r, rowIndex) => {
          return <tr>
            {columns?.map((c, colIndex) => {
              return <td key={keyPrefix + `b.${rowIndex}.` + (c.key ?? `${c.index}.${colIndex}`)}> {r[c.index]}</td>;
            })}
          </tr>;
        })}
      </tbody>
    </table >
  )
}

const tableSizeToCaretSize = {
  s: 's2',
  m: 's1',
  l: 's',
}


export default Table












