import styles from './CalendarHeader.module.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import dayjs from 'dayjs';
import React, { useContext } from 'react';
import logo from '../../../assets/logo.png';
import GlobalContext from '../../../context/GlobalContext';
export const CalendarHeader = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logo} src={logo} alt="calendar" />
      </div>
      <h1 className={styles.title}>Calendar</h1>
      <button className={styles.todayBtn} onClick={handleReset}>
        Today
      </button>
      <button className={styles.navBtn} onClick={handlePrevMonth}>
        <ChevronLeftIcon />
      </button>
      <button className={styles.navBtn} onClick={handleNextMonth}>
        <ChevronRightIcon />
      </button>
      <h2 className={styles.monthLabel}>
        {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
      </h2>
    </header>
  );
};
