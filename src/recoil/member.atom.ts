import { atom } from 'recoil';
import IDumDataSet from '../components/SearchForm/searchData.d';

export const pickedMemberInfo = atom<{} | IDumDataSet>({
  key: '#pickedMemberInfo',
  default: {},
});
