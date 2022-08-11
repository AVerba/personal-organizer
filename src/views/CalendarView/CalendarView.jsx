import styles from './CalendarView.module.css';
import { Container } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { EventModal } from '../../components/Calendar/EventModal';
import { CalendarHeader } from '../../components/Calendar/CalendarHeader';
import { CalendarMonth } from '../../components/Calendar/CalendarMonth';
import { CalendarSidebar } from '../../components/Calendar/CalendarSidebar/CalenderSidebar';
import GlobalContext from '../../context/GlobalContext';
import { getMonth } from '../../utils';

const CalendarView = () => {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  console.log('cur', currenMonth);
  const { monthIndex, showEventModal } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      <Container>
        <h4 className={styles.title}>
          We are sorry, but page at the moment under construction
        </h4>
      </Container>
      {showEventModal && <EventModal />}

      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className={styles.calendar}>
          <CalendarSidebar />
          <CalendarMonth month={currenMonth} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CalendarView;
