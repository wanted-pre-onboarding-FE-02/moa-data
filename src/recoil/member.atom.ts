import { IDate, IStepData, IHeartData } from '../types/index';
import { atom } from 'recoil';
import IDumDataSet from '../components/SearchForm/searchData.d';

export const pickedMemberInfo = atom<null | IDumDataSet>({
  key: '#pickedMemberInfo',
  default: null,
});

export const heartDataState = atom<IHeartData[] | undefined>({
  key: '#heartDataState',
  default: [],
});

export const stepDataState = atom<IStepData[] | undefined>({
  key: '#stepDataState',
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
