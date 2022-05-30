import DatePicker from 'components/SearchForm/DatePicker';
import { useState } from 'react';
import { RecoilState, useRecoilState } from 'recoil';
import { IDate } from 'types';
import styles from './dateForm.module.scss';

interface IProps {
  atomState: RecoilState<IDate>;
}

const DateForm = ({ atomState }: IProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [dateState, setDateState] = useRecoilState(atomState);
  const handleClick = () => {
    setIsVisible((prev) => !prev);
  };

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

export default DateForm;
