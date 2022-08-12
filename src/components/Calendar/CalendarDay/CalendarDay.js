import styles from './CalendarDay.module.css';
import dayjs from 'dayjs';
import React, { useContext, useState, useEffect } from 'react';
import GlobalContext from '../../../context/GlobalContext';
import cx from 'classnames';

export const CalendarDay = ({ day, rowIdx }) => {
  const [dayEvents, setDayEvents] = useState([]);
  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);

  const activeDay =
    day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
      ? styles.active
      : null;
  const classListDay = cx(styles.dataDay, activeDay);

  useEffect(() => {
    const events = filteredEvents.filter(
      evt => dayjs(evt.day).format('DD-MM-YY') === day.format('DD-MM-YY')
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className={styles.day}>
        {rowIdx === 0 && (
          <p className={styles.weekDay}>{day.format('ddd').toUpperCase()}</p>
        )}
        <p className={classListDay}>{day.format('DD')}</p>
      </header>
      <div
        // className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
};
