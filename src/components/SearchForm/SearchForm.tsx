import React, { ChangeEvent, FormEvent, useState } from 'react';
import List from './List/List';
import IDumDataSet from './searchData';
import styles from './searchForm.module.scss';

const DUMMY_DATA = [
  { id: 'hello111', date: '2022-01-15 17:51:29', mem_seq: 136 },
  { id: 'catcatcat', date: '2022-03-14 17:55:29', mem_seq: 328 },
  { id: 'hihi222', date: '2022-04-13 16:55:29', mem_seq: 380 },
]; // 전역 상태 관리 라이브러리 써야하나..

const SearchForm = () => {
  const [id, setId] = useState('');
  const [filtered, setFiltered] = useState<IDumDataSet[] | []>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (id.trim() === '') return;
    const filteredData = DUMMY_DATA.filter((data) => data.id.includes(id));
    if (filteredData.length === 0) {
      setFiltered([]);
      return;
    }
    setFiltered(filteredData);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.currentTarget.value);
  };

  const handleReset = () => {
    setId('');
    setFiltered([]);
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
            <input type='text' id='memberNum' defaultValue='전체' readOnly />
          </label>
        </div>
        <div className={styles.dateInputWrapper}>
          <label htmlFor='startDate'>조회 기간</label>
          <input type='text' id='startDate' defaultValue='전체' readOnly />
          <span> ~ </span>
          <input type='text' id='endDate' defaultValue='전체' readOnly />
          <button type='button'>오늘</button>
          <button type='button'>1주일</button>
          <button type='button'>전체</button>
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
