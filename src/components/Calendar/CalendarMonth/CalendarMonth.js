import styles from './CalendarMonth.module.css';
import React from 'react';
import { CalendarDay } from '../CalendarDay';

export const CalendarMonth = ({ month }) => {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <CalendarDay day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
