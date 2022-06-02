import { IDate } from '../types/index';
import { atom } from 'recoil';
import { IHeartData } from 'types';
import IDumDataSet from '../components/SearchForm/searchData.d';

export const pickedMemberInfo = atom<IDumDataSet>({
  key: '#pickedMemberInfo',
  default: {
    id: '',
    date: '',
    memSeq: -1,
  },
});

export const heartDataState = atom<IHeartData[]>({
  key: '#heartDataState',
  default: [],
});

export const searchListDateState = atom<IDate>({
  key: '#searchListDateState',
  default: { start: null, newEnd: null },
});

export const heartDateState = atom<IDate>({
  key: '#heartDateState',
  default: { start: null, newEnd: null },
});

export const stepDateState = atom<IDate>({
  key: '#stepDateState',
  default: { start: null, newEnd: null },
});
