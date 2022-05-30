import ColumnChart from 'components/Step/ColumnChart';
import React from 'react';
import SearchForm from '../components/SearchForm/SearchForm';
import HeartChart from '../components/HeartChar/HeartChart';
import styles from './page.module.scss';

const Page = () => {
  return (
    <div>
      <SearchForm />
      <HeartChart />
      <ColumnChart />
    </div>
  );
};

export default Page;
