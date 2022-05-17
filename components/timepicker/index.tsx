import React from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css';
import Select, { SelectIProps } from '../select';
import Option from '../select/option';
import moment from 'moment';


export interface TimepickerIProps extends SelectIProps {
  defaultTime?: moment.Moment,
  startTime?: moment.Moment,
  endTime?: moment.Moment,
  interval?: string,
  hourFomat?: 12 | 24,
}

const Timepicker = ({
  defaultTime,
  startTime = moment().startOf('day'),
  endTime = moment().endOf('day'),
  interval = '30m',
  hourFomat = 12,
  ...otherProps
}: TimepickerIProps) => {
  const timeList = getTimeList(startTime, endTime, interval);
  return (
    <Select
      {...otherProps}
    >
      {
        timeList.map((time, index) => {
          const label = time.format(hourFormatMap[hourFomat]);
          return (<Option
            key={`timepicker_option_${index}`}
            value={time.format('HH:mm:ss')}
            active={defaultTime && defaultTime.format('HH:mm:ss') === time.format('HH:mm:ss')}
          >
            {label}
          </Option>)
        })
      }
    </Select>
  )
}

const hourFormatMap = {
  12: 'hh:mm A',
  24: 'HH:mm',
}
const getTimeList = (startTime: moment.Moment, endTime: moment.Moment, interval: string) => {
  const intervalData = interval.slice(0, -1);
  const intervalType = interval.slice(-1);
  // if (intervalType === 'm')
  const timeList: moment.Moment[] = [];

  while (startTime <= endTime) {
    timeList.push(startTime.clone());
    startTime.add(intervalData, 'minutes')
  }

  return timeList
}

export default Timepicker












