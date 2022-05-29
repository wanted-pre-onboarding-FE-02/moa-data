import { IDate } from '../types/index';
import { atom } from 'recoil';
import { IHeartData } from 'types';
import IDumDataSet from '../components/SearchForm/searchData.d';

export const pickedMemberInfo = atom<{} | IDumDataSet>({
  key: '#pickedMemberInfo',
  default: {},
});

export const heartDataState = atom<IHeartData[] | undefined>({
  key: '#heartDataState',
  default: [],
});

export const searchListDateState = atom<IDate>({
  key: '#searchListDateState',
  default: { start: null, end: null },
});

export const heartDateState = atom<IDate>({
  key: '#heartDateState',
  default: { start: null, end: null },
});

export const stepDateState = atom<IDate>({
  key: '#stepDateState',
  default: { start: null, end: null },
});
