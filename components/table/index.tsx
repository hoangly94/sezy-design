import React, { CSSProperties } from 'react';
import Classnames from 'classnames';
import _ from 'lodash';
import styles from './_styles.module.css';
import ThreeDotsLoader from '../icon/solid/threeDotsLoader';

type TLabel = {
  emptyData?: string,
}

type TableColumn = {
  key?: string,
  index: string,
  label: string | React.ReactNode,
  isDisabled?: boolean,
  filter?: Object,
  sort?: Object,
  search?: Object,
  align?: 'center' | 'left' | 'right',
  valign?: 'middle' | 'top' | 'bottom',
  styles: CSSProperties,
}

type TableData = Object & {
  key?: string,
  render?: Function,
  onClick?: React.MouseEventHandler,
}

export interface TableIProps {
  type?: 'flat' | 'outline' | 'nude',
  size?: 's' | 'm' | 'l',
  columns?: TableColumn[],
  data?: TableData[],
  labels?: TLabel,
  hasHeader?: boolean,
  isLoading?: boolean,
  className?: string,
  onScroll?: any,
}

const Table = ({
  type = 'outline',
  size = 'm',
  hasHeader = true,
  isLoading = false,
  columns,
  labels,
  data,
  className,
  onScroll,
  ...otherProps
}: TableIProps) => {
  const labelMap = Object.assign({
    emptyData: 'Empty',
  }, labels);

  const keyPrefix = 'table.';
  const tableProps = {
    ...otherProps,
    className: Classnames(
      styles['sezy-table'],
      styles['sezy-table-' + type],
      styles['sezy-table-' + size],
    ),
  }

  return (
    <div
      className={Classnames(
        styles['sezy-table-wrapper'],
        className
      )}
      onScroll={onScroll}
      >
      <table {...tableProps}>
        {
          hasHeader && <thead>
            <tr>
              {columns?.map((c, index) => {
                return (
                  <th
                    key={keyPrefix + 'h.' + (c.key ?? `${c.index}.${index}`)}
                    style={{
                      textAlign: c.align,
                      ...(c.styles || []),
                    }}
                  >
                    {c.label}
                  </th>
                );
              })}
            </tr>
          </thead>
        }
        <tbody>
          {data?.map((r, rowIndex) => {
            return (
              <tr
                key={keyPrefix + `br.${rowIndex}.`}
                {
                ...r
                }
              >
                {columns?.map((c, colIndex) => {
                  const cell = r[c.index];
                  return (
                    <td
                      key={keyPrefix + `bd.${rowIndex}.` + (c.key ?? `${c.index}.${colIndex}`)}
                      align={c.align}
                      valign={c.valign}
                      {...(_.isObject(cell) ? cell : null)}
                    >
                      {
                        _.isObject(cell) ? cell['children'] : cell
                      }
                    </td>
                  );
                })}
              </tr>
            );
          })}
          {/* {
            !data?.length && (<tr>
              <td align="center" rowSpan={4} colSpan={columns?.length} >
                {labelMap.emptyData}
              </td>
            </tr>)
          } */}
        </tbody>
      </table >
      {isLoading && <div className={styles['sezy-table-loading']}><ThreeDotsLoader size={sizeToLoadingSize[size] as any} /></div>}
    </div>
  )
}


const sizeToLoadingSize = {
  s: 'l2',
  m: 'l3',
  l: 'l4',
}



export default Table












