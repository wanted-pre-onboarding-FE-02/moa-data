import React, { ChangeEvent, FormEvent, useState } from 'react';
import { IHeartData } from '../../types';
import HeartChart from '../HeartChar/HeartChart';
// eslint-disable-next-line import/no-cycle
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

import IDumDataSet from './searchData.d';
import List from './List/List';

import styles from './searchForm.module.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { btnData, DUMMY_DATA } from './List/ListConstant';
import DatePicker from './DatePicker';

dayjs.extend(isBetween); // dayjs 설치

const SearchForm = () => {
  // const [clickCategory, setClickCategory] = useState<Category>('전체');
  const [id, setId] = useState('');
  const [code, setCode] = useState<string>('');
  const [startDate, setStartDate] = useState<null | Date>(null);
  const [endDate, setEndDate] = useState<null | Date>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [filtered, setFiltered] = useState<IDumDataSet[] | []>([]);

  console.log(filtered);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const filteredIdData = DUMMY_DATA.filter((data) => data.id.includes(id));
    const filteredCodeData = filteredIdData.filter(({ memSeq }) => String(memSeq).includes(code));
    if (!startDate || !endDate) {
      setFiltered(filteredCodeData);
      setStartDate(null);
      setEndDate(null);
      setIsVisible(false);
      return;
    }
    const filteredDateData = filteredCodeData.filter(({ date }) => dayjs(date).isBetween(startDate, endDate));
    setFiltered(filteredDateData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.currentTarget.value);
  };

  const handleNumChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.currentTarget.value);
  };

  const handleDateChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (start && end) {
      setIsVisible((prev) => !prev);
    }
  };

  // input change event handler가 너무 많음

  const handleReset = () => {
    setId('');
    setCode('');
    setStartDate(null);
    setEndDate(null);
    setFiltered([]);
  };

  const handleClick = () => {
    setIsVisible((prev) => !prev);
  };

  const handledDateBtnClick = (e: any) => {
    const { keyword } = e.currentTarget.dataset;
    const dataArr = btnData.find((btn) => btn.text === keyword);
    if (dataArr) {
      setStartDate(dataArr?.startVal);
      setEndDate(dataArr?.endVal);
      setIsVisible(false);
    }
  };

  return (
    <div className={styles.searchFormWrapper}>
      <h3>회원 검색</h3>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <div className={styles.idAndNumWrapper}>
          <label htmlFor='memberId'>
            로그인 ID
            <input type='text' id='memberId' value={id} placeholder='전체' autoComplete='off' onChange={handleChange} />
          </label>
          <label htmlFor='memberNum'>
            회원 번호
            <input
              type='text'
              id='memberNum'
              value={code}
              placeholder='전체'
              autoComplete='off'
              onChange={handleNumChange}
            />
          </label>
        </div>
        <div className={styles.dateInputWrapper}>
          <label htmlFor='startDate'>조회 기간</label>
          <button type='button' onClick={handleClick}>
            <span className={styles.date}>{startDate === null ? '전체' : startDate.toLocaleString()}</span> ~{' '}
            <span className={styles.date}>{endDate === null ? '전체' : endDate.toLocaleString()}</span>
          </button>
          {isVisible && <DatePicker startDate={startDate} endDate={endDate} handleDateChange={handleDateChange} />}
          {btnData.map((d) => (
            <button type='button' key={`btns-${d.text}`} onClick={handledDateBtnClick} data-keyword={d.text}>
              {d.text}
            </button>
          ))}
        </div>
        <div className={styles.underBtns}>
          <button type='button' onClick={handleReset}>
            필터 초기화
          </button>
          <button type='submit'>검색</button>
        </div>
      </form>
      {filtered && <List tableData={filtered} />}
    </div>
  );
};

export default SearchForm;
