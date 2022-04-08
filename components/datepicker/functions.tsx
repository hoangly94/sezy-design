import React, { useState } from 'react';
import Classnames from 'classnames';
import styles from './_styles.module.css'
import Label from '../label';
import moment from 'moment';
import _ from 'lodash';
import {TSize} from '.';

export const toMonthYearPickerFn = ({
  key,
  size,
  activeConditionFn,
  blurConditionFn,
  onClick,
  range,
  toLabelFn
}: {
  key: string,
  size: TSize,
  activeConditionFn: (string, number) => boolean,
  blurConditionFn: (string, number) => boolean,
  onClick: (string, number) => void,
  range: number[] | string[],
  toLabelFn: (string, number) => string | number
}) => (
  range.map((data, index) =>
    <Label
      size={size}
      key={`datepicker.${key}.${index}`}
      className={Classnames(
        activeConditionFn(data, index) && styles['sezy-datepicker-monthyear-picker-active'],
        blurConditionFn(data, index) && styles['sezy-datepicker-blur'],
      )}
      onClick={() => onClick(data, index)}
    >
      {toLabelFn(data, index)}
    </Label>
  )

)
export const getMonthYearPicker = (condition, fn) => {
  return (
    <div
      className={Classnames(
        styles['sezy-datepicker-monthyear-picker'],
        condition && styles['sezy-datepicker-monthyear-shown'],
      )}
    >
      {fn()}
    </div>
  )
}

export const toTableData = (currentDate: moment.Moment, onClickCell, selectedDates: moment.Moment[]) => {
  const firstDateOfMonth = currentDate.clone().startOf('month');
  const lastDateOfMonth = currentDate.clone().endOf('month').set({ 
    hour:0,
    minute:0,
    second:0,
    millisecond:0
  });
  const firstLeft = firstDateOfMonth.day();
  const lastLeft = lastDateOfMonth.day();

  const firstWeekDates = {};
  const middleWeeks = new Array();
  const lastWeekDates = {};

  _.range(7)
    .forEach((v, i) => {
      const date = firstDateOfMonth.clone().add(i - firstLeft, "days");
      firstWeekDates[`d${i}`] = {
        children: <span>{date.format('D')}</span>,
        className: Classnames(
          selectedDates[1].isSame(date, 'day') && styles['sezy-datepicker-active-to'],
          i < firstLeft && styles['sezy-datepicker-blur']
        ),
        onClick: onClickCell(date.clone())
      };
    });
  _.range(7)
    .forEach((v, i) => {
      const date = lastDateOfMonth.clone().add(i - lastLeft, "days");
      return lastWeekDates[`d${i}`] = {
        children: <span>{date.format('D')}</span>,
        className: Classnames(
          selectedDates[1].isSame(date, 'day') && styles['sezy-datepicker-active-to'],
          i > lastLeft && styles['sezy-datepicker-blur']
        ),
        onClick: onClickCell(date.clone())
      };
    });

  const middleAmount = currentDate.daysInMonth() - (7 - firstLeft) - (lastLeft + 1);
  const firstFrom = 7 - firstLeft;

  _.range(middleAmount / 7)
    .forEach((v, weekIndex) => {
      const weekDates = {};
      const nextWeekDay = 7 * weekIndex;
      _.range(7)
        .forEach((v, dateIndex) => {
          const date = firstDateOfMonth.clone().add(dateIndex + firstFrom + nextWeekDay, "days");
          weekDates[`d${dateIndex}`] = {
            children: <span>{date.format('D')}</span>,
            className: Classnames(
              selectedDates[1].isSame(date, 'day') && styles['sezy-datepicker-active-to'],
            ),
            onClick: onClickCell(date.clone())
          };
        });

      middleWeeks.push(weekDates);
    });

  const resultData = [firstWeekDates, ...middleWeeks, lastWeekDates];
  //add last row
  if (resultData.length < 6) {
    const extraDates = {};
    _.range(7)
      .forEach((v, i) => {
        const date = lastDateOfMonth.clone().add(i - lastLeft + 7, "days");
        return extraDates[`d${i}`] = {
          children: <span>{date.format('D')}</span>,
          className: Classnames(
            styles['sezy-datepicker-blur']
          ),
          onClick: onClickCell(date.clone())
        };
      });

    resultData.push(extraDates);
  }
  return resultData;
}


export const get10Years = (currentYear: number, remaining: number = 0) => {
  return getXYears(currentYear, remaining)
}

export const get100Years = (currentYear: number, remaining: number = 0) => {
  return getXYears(currentYear, remaining, 2)
}

export const get1000Years = (currentYear: number, remaining: number = 0) => {
  return getXYears(currentYear, remaining, 3)
}

export const getXYears = (currentYear: number, remaining: number, range: number = 1) => {
  const power = Math.pow(10, range);
  const power2 = Math.pow(10, range - 1);
  const fromDate = _.floor(currentYear, -range) - remaining * power2;
  const toDate = (currentYear % power === 0 ? currentYear + power : _.ceil(currentYear, -range)) + remaining * power2;
  return [fromDate, toDate]
}
