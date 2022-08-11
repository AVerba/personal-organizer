import styles from './CalenderSidebar.module.css';
import React from 'react';
import { CreateEventButton } from '../CreateEventButton';
import { SmallCalendar } from '../SmallCalendar';
import { Labels } from '../CalendarLabels';
export const CalendarSidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <CreateEventButton />
      <SmallCalendar />
      {/*<Labels />*/}
    </aside>
  );
};
