import DatePicker from 'components/SearchForm/DatePicker';
import { useState } from 'react';
import { RecoilState, useRecoilState } from 'recoil';
import { IDate } from 'types';
import styles from './dateForm.module.scss';

interface IProps {
  atomState: RecoilState<IDate>;
}

const TODAY_START = new Date(new Date().setHours(0, 0, 0));
const TODAY_END = new Date(new Date().setHours(23, 59, 59));

export const btnData = [
  {
    text: '오늘',
    startVal: TODAY_START,
    endVal: TODAY_END,
  },
  {
    text: '일주일',
    startVal: new Date(new Date(TODAY_START).setDate(TODAY_START.getDate() - 7)),
    endVal: TODAY_END,
  },
  {
    text: '전체',
    startVal: new Date('2022-01-01 00:00:00'),
    endVal: TODAY_END,
  },
];

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

  const handledDateBtnClick = (startVal: Date, endVal: Date) => () => setDateState({ start: startVal, newEnd: endVal });

  return (
    <div className={styles.wrapper}>
      <label htmlFor='startDate'>조회 기간</label>
      <button type='button' onClick={handleClick} className={styles.dateDisplay}>
        <span className={styles.date}>{dateState?.start === null ? '전체' : dateState?.start.toLocaleString()}</span>~{' '}
        <span className={styles.date}>{dateState.newEnd === null ? '전체' : dateState.newEnd.toLocaleString()}</span>
      </button>
      {isVisible && (
        <DatePicker startDate={dateState.start} endDate={dateState.newEnd} handleDateChange={handleDateChange} />
      )}
      {btnData.map((d) => (
        <button
          type='button'
          className={styles.dateButton}
          key={`btns-${d.text}`}
          onClick={handledDateBtnClick(d.startVal, d.endVal)}
          data-keyword={d.text}
        >
          {d.text}
        </button>
      ))}
    </div>
  );
};

export default DateForm;
