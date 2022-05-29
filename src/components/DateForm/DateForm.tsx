import DatePicker from 'components/SearchForm/DatePicker';
import React, { useState } from 'react';
import { IDate } from 'types';
import styles from './dateForm.module.scss';

interface IProps {
  dateState: IDate;
  setDateState: ({ start, end }: IDate) => void;
}

const DateForm = ({ dateState, setDateState }: IProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible((prev) => !prev);
  };

  const handleDateChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setDateState({ start, end });
    if (start && end) {
      setIsVisible((prev) => !prev);
    }
  };

  return (
    <>
      <label htmlFor='startDate'>조회 기간</label>
      <button type='button' onClick={handleClick}>
        <span className={styles.date}>{dateState?.start === null ? '전체' : dateState?.start.toLocaleString()}</span>~{' '}
        <span className={styles.date}>{dateState.end === null ? '전체' : dateState.end.toLocaleString()}</span>
      </button>
      {isVisible && (
        <DatePicker startDate={dateState.start} endDate={dateState.end} handleDateChange={handleDateChange} />
      )}
    </>
  );
};

export default DateForm;
