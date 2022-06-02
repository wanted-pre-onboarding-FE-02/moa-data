import React, { ChangeEvent, FormEvent, useState } from 'react';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

import IDumDataSet from './searchData.d';
import List from './List/List';

import styles from './searchForm.module.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { btnData, DUMMY_DATA } from './List/ListConstant';
import { useRecoilState } from 'recoil';
import { searchListDateState } from 'recoil/member.atom';
import DateForm from 'components/DateForm/DateForm';
import { IDate } from 'types';

dayjs.extend(isBetween); // dayjs 설치

const SearchForm = () => {
  const [id, setId] = useState('');
  const [code, setCode] = useState<string>('');
  const [dateState, setDateState] = useRecoilState<IDate>(searchListDateState);
  // const [isVisible, setIsVisible] = useState(false);
  const [filtered, setFiltered] = useState<IDumDataSet[] | undefined>(undefined);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const filteredIdData = DUMMY_DATA.filter((data) => data.id.includes(id));
    const filteredCodeData = filteredIdData.filter(({ memSeq }) => String(memSeq).includes(code));
    if (!dateState?.start || !dateState.newEnd) {
      setFiltered(filteredCodeData);
      setDateState({ start: null, newEnd: null });
      // setIsVisible(false);
      return;
    }
    const filteredDateData = filteredCodeData.filter(({ date }) =>
      dayjs(date).isBetween(dateState.start, dateState.newEnd)
    );

    setFiltered(filteredDateData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.currentTarget.value);
  };

  const handleNumChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.currentTarget.value);
  };

  const handleReset = () => {
    setId('');
    setCode('');
    setDateState({ start: null, newEnd: null });
    setFiltered([]);
  };

  const handledDateBtnClick = (e: FormEvent<HTMLButtonElement>) => {
    const { keyword } = e.currentTarget.dataset;
    const dataArr = btnData.find((btn) => btn.text === keyword);
    if (dataArr) {
      setDateState({ start: dataArr.startVal, newEnd: dataArr.endVal });
      // setIsVisible(false);
    }
  };

  return (
    <div className={styles.searchFormWrapper}>
      {/* <h3>회원 검색</h3> */}
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <div className={styles.idAndNumWrapper}>
          <label htmlFor='memberId'>
            <span>로그인 ID</span>
            <input type='text' id='memberId' value={id} placeholder='전체' autoComplete='off' onChange={handleChange} />
          </label>
          <label htmlFor='memberNum'>
            <span>회원 번호</span>
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
          <DateForm dateState={dateState} setDateState={setDateState} />
          {btnData.map((d) => (
            <button
              type='button'
              className={styles.dateButton}
              key={`btns-${d.text}`}
              onClick={handledDateBtnClick}
              data-keyword={d.text}
            >
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
      <List tableData={filtered} />
    </div>
  );
};

export default SearchForm;
