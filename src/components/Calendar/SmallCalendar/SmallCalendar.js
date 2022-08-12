import styles from './SmallCalendar.module.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import dayjs from 'dayjs';
import React, { useContext, useEffect, useState } from 'react';
import GlobalContext from '../../../context/GlobalContext';
import { getMonth } from '../../../utils';
import { CreateEventButton } from '../CreateEventButton';
import cx from 'classnames';

export const SmallCalendar = () => {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  const { monthIndex, setSmallCalendarMonth, setDaySelected, daySelected } =
    useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  function handlePrevMonth() {
    setCurrentMonthIdx(currentMonthIdx - 1);
  }

  function handleNextMonth() {
    setCurrentMonthIdx(currentMonthIdx + 1);
  }

  function getDayClass(day) {
    const format = 'DD-MM-YY';
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    // const slcDay = daySelected && daySelected.format(format);
    if (nowDay === currDay) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className={styles.smallCalendar}>
      <header className={styles.header}>
        <p className={styles.monthlabel}>
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format('MMMM YYYY')}
        </p>

        <div>
          <button className={styles.navBtn} onClick={handlePrevMonth}>
            <ChevronLeftIcon />
          </button>
          <button className={styles.navBtn} onClick={handleNextMonth}>
            <ChevronRightIcon />
          </button>
        </div>
      </header>

      <div className={styles.calendarMatrix}>
        {currentMonth[0].map((day, i) => (
          <span key={i} className={styles.weekDay}>
            {day.format('ddd').toUpperCase()}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i} className={styles.smDay}>
            {row.map((day, idx) => (
              <button
                key={idx}
                className={styles.day}
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIdx);
                  setDaySelected(day);
                }}
              >
                <span
                  className={getDayClass(day) ? styles.activeDay : styles.day}
                >
                  {day.format('D')}
                </span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
