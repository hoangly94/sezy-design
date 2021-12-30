import React, { useState } from 'react'
import Classnames from 'classnames'
import styles from './_styles.module.css'
import { useClickOutside } from '../../hooks'
import Table from '../table'
import Input from '../input'
import Calendar from '../icon/solid/calendar'
import moment from 'moment'
import _ from 'lodash'
import { toTableData } from './functions'
import Menu from './menu'
import Yearpicker from './yearpicker'

export type TLabel = {
  placeholder?: string,
  weekDays?: string[],
  months?: string[],
}
export type TSize = 's' | 'm' | 'l';
export type TMonthYearPicker = 'month' | 'year' | 'group10Years' | 'group100Years' | 'group1000Years' | null;

export interface DatepickerIProps {
  type?: 'flat' | 'outline',
  size?: TSize,
  labels?: TLabel,
  dateFormat?: string,
  defaultDate?: [moment.Moment, moment.Moment]
  yearRange?: [number, number],
  isLoading?: boolean,
  onChange?: ({ date, dateFrom }: { date: moment.Moment, dateFrom?: moment.Moment }) => void,
}
const Datepicker = ({
  type = 'flat',
  size = 'm',
  labels,
  dateFormat = 'YYYY/MM/DD',
  defaultDate = [moment(), moment()],
  isLoading = false,
  onChange,
}: DatepickerIProps) => {
  const labelMap = Object.assign({
    placeholder: 'Date...',
    weekDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  }, labels);
  const {
    ref: clickOutsideRef,
    isClickOutside,
    setClickOutside,
  } = useClickOutside({ exludeChildren: true });
  const [currentDate, setCurrentDate] = useState(defaultDate[1]);
  // const [currentDate, setCurrentDate] = useState(moment('2022/05/05'));
  const [selectedDates, setSelectedDates] = useState([moment(), moment()]);
  const [isShownMonthYearPicker, setShownMonthYearPicker] = useState<TMonthYearPicker>(null);
  const [currentYearPicker, setCurrentYearPicker] = useState(defaultDate[1]);

  const inputRef: any = React.useRef(null);

  const tableColumns = labelMap?.weekDays?.map((label, index) => ({
    index: 'd' + index,
    label: label,
    align: 'center'
  }))

  const onClickCell = (date: moment.Moment) => (e) => {
    selectedDates[1] = date;
    if (!currentDate.isSame(date, 'month')) {
      currentDate.add(currentDate < date ? 1 : -1, 'M');
    }
    inputRef.current.value = date.format(dateFormat);
    onChange && onChange({
      date: selectedDates[1],
      dateFrom: selectedDates[0],
    });
    setClickOutside(true);
  }

  return (
    <div className={Classnames(
      styles['sezy-datepicker'],
      styles['sezy-datepicker-' + type],
      styles['sezy-datepicker-' + size],
    )}
      ref={clickOutsideRef}
    >
      <Input
        type={type}
        ref={inputRef}
        size={size}
        postfix={<Calendar size={size} />}
        placeholder={labelMap?.placeholder}
        isReadOnly={true}
        isLoading={isLoading}
        onClick={() => setClickOutside(false)}
      />
      <div className={Classnames(
        styles['sezy-datepicker-box'],
        !isClickOutside && styles['sezy-datepicker-open'],
      )}>
        {/* <Label.Element text={currentMonthYearString} /> */}
        <Menu
          size={size}
          labels={labelMap}
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          isShownMonthYearPicker={isShownMonthYearPicker}
          setShownMonthYearPicker={setShownMonthYearPicker}
          currentYearPicker={currentYearPicker}
          setCurrentYearPicker={setCurrentYearPicker}
        />
        <div className={Classnames(
          styles['sezy-datepicker-table'],
        )}>
          <Table
            type={type === 'flat' ? 'nude' : type}
            size={size}
            columns={tableColumns as any}
            data={toTableData(currentDate, onClickCell, selectedDates)} />
        </div>

        {/* Month Year Picker */}
        <Yearpicker
          size={size}
          labels={labelMap}
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          isShownMonthYearPicker={isShownMonthYearPicker}
          setShownMonthYearPicker={setShownMonthYearPicker}
          currentYearPicker={currentYearPicker}
          setCurrentYearPicker={setCurrentYearPicker}
        />
      </div >
    </div >
  )
}

export default Datepicker