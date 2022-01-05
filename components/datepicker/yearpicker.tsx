import React, { useState } from 'react'
import moment from 'moment'
import _ from 'lodash'
import { getMonthYearPicker, get10Years, get100Years, get1000Years, toMonthYearPickerFn } from './functions'
import { TLabel, TMonthYearPicker, TSize } from '.'

const DatepickerYearpicker = ({
  size,
  labels,
  currentDate,
  setCurrentDate,
  isShownMonthYearPicker,
  setShownMonthYearPicker,
  currentYearPicker,
  setCurrentYearPicker
}: {
  size: TSize,
  labels: TLabel,
  defaultDate?: [moment.Moment, moment.Moment]
  currentDate: moment.Moment,
  setCurrentDate: React.Dispatch<React.SetStateAction<moment.Moment>>
  isShownMonthYearPicker: TMonthYearPicker,
  setShownMonthYearPicker: React.Dispatch<React.SetStateAction<TMonthYearPicker>>,
  currentYearPicker: moment.Moment,
  setCurrentYearPicker: React.Dispatch<React.SetStateAction<moment.Moment>>
}) => {
  const toMonthPicker = () =>
    toMonthYearPickerFn({
      key: 'month',
      size,
      activeConditionFn: (data, index) => +currentDate.format('M') - 1 === index,
      blurConditionFn: (data, index) => false,
      onClick: (data, index) => {
        currentDate.set('month', index)
        setShownMonthYearPicker(null);
      },
      range: labels.months || [],
      toLabelFn: (data, index) => data
    })

  const toYearPicker = () => {
    const [from, to] = get10Years(+currentYearPicker.format('YYYY'), 1);
    const yearRange = _.range(from, to);
    const currentYear = +currentDate.format('YYYY');
    return toMonthYearPickerFn({
      key: 'year',
      size,
      activeConditionFn: (data, index) => currentYear === data,
      blurConditionFn: (data, index) => [0, yearRange.length - 1].includes(index),
      onClick: (data, index) => {
        currentDate.set('year', data);
        currentYearPicker.set('year', data);
        setShownMonthYearPicker('month');
      },
      range: yearRange,
      toLabelFn: (data, index) => data
    })
  }

  const to10YearsPicker = () => {
    const [from, to] = get100Years(+currentYearPicker.format('YYYY'), 1);
    const yearRange = _.range(from, to, 10);
    const activeYear = get10Years(+currentDate.format('YYYY'))[0];
    return toMonthYearPickerFn({
      key: 'year10',
      size,
      activeConditionFn: (data, index) => activeYear === data,
      blurConditionFn: (data, index) => [0, yearRange.length - 1].includes(index),
      onClick: (data, index) => {
        currentDate.set('year', data);
        currentYearPicker.set('year', data);
        setShownMonthYearPicker('month');
      },
      range: yearRange,
      toLabelFn: (data, index) => {
        const years = get10Years(data);
        years[1] -= 1;
        return years.join('-');
      }
    })
  }

  const to100YearsPicker = () => {
    const [from, to] = get1000Years(+currentYearPicker.format('YYYY'), 1).map(year => year -= 500);
    const yearRange = _.range(from, to, 100);
    const activeYear = get100Years(+currentDate.format('YYYY'))[0];
    return toMonthYearPickerFn({
      key: 'year100',
      size,
      activeConditionFn: (data, index) => activeYear === data,
      blurConditionFn: (data, index) => [0, yearRange.length - 1].includes(index),
      onClick: (data, index) => {
        currentDate.set('year', data);
        currentYearPicker.set('year', data);
        setShownMonthYearPicker('month');
      },
      range: yearRange,
      toLabelFn: (data, index) => {
        const years = get100Years(data);
        years[1] -= 1;
        return years.join('-');
      }
    })
  }

  return (
    < div >
      {getMonthYearPicker(isShownMonthYearPicker === 'month', toMonthPicker)}
      {getMonthYearPicker(isShownMonthYearPicker === 'year', toYearPicker)}
      {getMonthYearPicker(isShownMonthYearPicker === 'group10Years', to10YearsPicker)}
      {getMonthYearPicker(isShownMonthYearPicker === 'group100Years', to100YearsPicker)}
    </div >
  )
}

export default DatepickerYearpicker