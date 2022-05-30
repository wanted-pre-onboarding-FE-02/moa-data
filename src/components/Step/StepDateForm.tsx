import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { stepDateState } from 'recoil/member.atom';
import styles from './dateForm.module.scss';

import DatePicker from 'components/SearchForm/DatePicker';

const StepDateForm = () => {
  const [dateState, setDateState] = useRecoilState(stepDateState);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => setIsVisible((prev) => !prev);

  const handleDateChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    const newEnd = end && new Date(end.setHours(23, 59, 59));

    setDateState({ start, newEnd });
    if (start && end) {
      setIsVisible((prev) => !prev);
    }
  };

  return (
    <>
      <label htmlFor='startDate'>조회 기간</label>
      <button type='button' onClick={handleClick}>
        <span className={styles.date}>{dateState?.start === null ? '전체' : dateState?.start.toLocaleString()}</span>~{' '}
        <span className={styles.date}>{dateState.newEnd === null ? '전체' : dateState.newEnd.toLocaleString()}</span>
      </button>
      {isVisible && (
        <DatePicker startDate={dateState.start} endDate={dateState.newEnd} handleDateChange={handleDateChange} />
      )}
    </>
  );
};

export default StepDateForm;
