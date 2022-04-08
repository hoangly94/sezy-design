import React, { useState } from 'react'
import Classnames from 'classnames'
import styles from './_styles.module.css'
import { useClickOutside } from '../../hooks'
import Table from '../table'
import Input from '../input'
import Label from '../label'
import Chevron from '../icon/solid/chevron'
import Caret from '../icon/solid/caret'
import Calendar from '../icon/solid/calendar'
import moment from 'moment'
import _ from 'lodash'
import { get10Years, get100Years, get1000Years } from './functions'
import { TLabel, TMonthYearPicker, TSize } from '.'

const DatepickerMenu = ({
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
  currentDate: moment.Moment,
  setCurrentDate: React.Dispatch<React.SetStateAction<moment.Moment>>
  isShownMonthYearPicker: TMonthYearPicker,
  setShownMonthYearPicker: React.Dispatch<React.SetStateAction<TMonthYearPicker>>,
  currentYearPicker: moment.Moment,
  setCurrentYearPicker: React.Dispatch<React.SetStateAction<moment.Moment>>
}) => {

  const handlePrevNextClick = (value) => () => {
    switch (isShownMonthYearPicker) {
      case 'year':
        setCurrentYearPicker(currentYearPicker.clone().add(value * 10, 'years'));
        break;
      case 'group10Years':
        setCurrentYearPicker(currentYearPicker.clone().add(value * 100, 'years'));
        break;
      case 'group100Years':
        setCurrentYearPicker(currentYearPicker.clone().add(value * 1000, 'years'));
        break;
      default:
        console.log('==========');
        console.log(value);
        setCurrentDate(currentDate.clone().add(value, 'M'));
    }

  }

  const toMonthYearMenu = () => {
    if (isShownMonthYearPicker === 'month')
      return (
        <div>
          <Label
            size={size}
            className={Classnames(
              styles['sezy-datepicker-monthyear'],
            )}
            onClick={() => setShownMonthYearPicker('group10Years')}
          >
            {currentYearPicker.format('YYYY')}
          </Label>
          <Label />
        </div>
      );

    if (isShownMonthYearPicker === 'year')
      return (
        <div>
          <Label
            size={size}
            className={Classnames(
              styles['sezy-datepicker-monthyear'],
            )}
            onClick={() => setShownMonthYearPicker('group10Years')}
          >
            {get10Years(+currentYearPicker.format('YYYY')).join('-')}
          </Label>
          <Label />
        </div>
      );

    if (isShownMonthYearPicker === 'group10Years') {
      const years = get100Years(+currentYearPicker.format('YYYY'));
      years[1] -= 1;
      return (
        <div>
          <Label
            size={size}
            className={Classnames(
              styles['sezy-datepicker-monthyear'],
            )}
            onClick={() => setShownMonthYearPicker('group100Years')}
          >
            {years.join('-')}
          </Label>
          <Label />
        </div>
      );
    }
    if (isShownMonthYearPicker === 'group100Years') {
      const years = get1000Years(+currentYearPicker.format('YYYY')).map(year => year -= 500);
      years[1] -= 1;
      return (
        <div>
          <Label
            size={size}
            className={Classnames(
              styles['sezy-datepicker-monthyear'],
            )}
          >
            {years.join('-')}
          </Label>
          <Label />
        </div>
      );
    }

    return (
      <div>
        <Label
          size={size}
          className={Classnames(
            styles['sezy-datepicker-monthyear'],
          )}
          onClick={() => setShownMonthYearPicker('month')}
        >
          {labels.months && labels.months[+currentDate.format('MM') - 1]}
        </Label>
        <Label
          size={size}
          className={Classnames(
            styles['sezy-datepicker-monthyear'],
          )}
          onClick={() => setShownMonthYearPicker('year')}
        >
          {currentYearPicker.format('YYYY')}
        </Label>
        <Caret
          direction='down'
          size={toCaretSize[size]}
        />
      </div>
    );
  }

  return (
    <div
      className={Classnames(
        styles['sezy-datepicker-menu'],
      )}
    >
      {toMonthYearMenu()}
      <div>
        <Chevron
          className={Classnames(
            styles['sezy-datepicker-prevnext'],
          )}
          direction='left'
          size={toChevronSize[size]}
          onClick={handlePrevNextClick(-1)}
          isDisabled={isShownMonthYearPicker ==='month' || isShownMonthYearPicker !== null && +currentYearPicker.format('YYYY') <= 2000}
        />
        <Chevron
          className={Classnames(
            styles['sezy-datepicker-prevnext'],
          )}
          direction='right'
          size={toChevronSize[size]}
          onClick={handlePrevNextClick(1)}
          isDisabled={isShownMonthYearPicker ==='month' || isShownMonthYearPicker !== null && +currentYearPicker.format('YYYY') >= 3000}
        />
      </div>
    </div>
  )
}

const toChevronSize: any = {
  s: 's1',
  m: 's',
  l: 'm',
}
const toCaretSize: any = {
  s: 's1',
  m: 's1',
  l: 's',
}

export default DatepickerMenu