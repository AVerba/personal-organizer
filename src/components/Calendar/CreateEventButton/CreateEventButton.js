import styles from './CreateEventButton.module.css';
import React, { useContext } from 'react';
import plusImg from '../../../assets/plus.svg';
import GlobalContext from '../../../context/GlobalContext';
export const CreateEventButton = () => {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className={styles.createBtn}
    >
      <img src={plusImg} alt="create_event" className="w-7 h-7" />
      <span className="pl-3 pr-7"> Create</span>
    </button>
  );
};
