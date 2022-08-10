import styles from './CalenderSidebar.module.css';
import React from 'react';
import { CreateEventButton } from '../CreateEventButton';
import { SmallCalendar } from '../SmallCalendar';
import { Labels } from '../CalendarLabels';
export const CalendarSidebar = () => {
  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
    </aside>
  );
};
