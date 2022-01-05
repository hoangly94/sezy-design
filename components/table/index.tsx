import React from 'react';
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
  align?: 'center' | 'left' | 'right'
  valign?: 'middle' | 'top' | 'bottom'
}

type TableData = Object & {
  key?: string,
  render?: Function,
}


export interface TableIProps {
  type?: 'flat' | 'outline' | 'nude',
  size?: 's' | 'm' | 'l',
  columns?: TableColumn[],
  data?: TableData[],
  labels?: TLabel,
  isLoading?: boolean,
  className?: string,
}
const Table = ({
  type = 'outline',
  size = 'm',
  isLoading = false,
  columns,
  labels,
  data,
  className,
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
      className,
    ),
  }

  return (
    <div className={Classnames(
      styles['sezy-table-wrapper'],
    )}>
      <table {...tableProps}>
        <thead>
          <tr>
            {columns?.map((c, index) => {
              return (
                <th
                  key={keyPrefix + 'h.' + (c.key ?? `${c.index}.${index}`)}
                  style={{
                    textAlign: c.align
                  }}
                >
                  {c.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((r, rowIndex) => {
            return (
              <tr
                key={keyPrefix + `br.${rowIndex}.`}
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
          {
            !data?.length && (<tr>
              <td align="center" rowSpan={4} colSpan={columns?.length} >
                {labelMap.emptyData}
              </td>
            </tr>)
          }
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












