import { atom } from 'recoil';

export const userNumState = atom({
  key: 'userNumState',
  default: 136,
});
export const stepStartDayState = atom<Date>({
  key: 'startDayState',
  default: new Date('2022-04-16'),
});

export const stepEndDayState = atom<Date>({
  key: 'endDayState',
  default: new Date('2022-04-20'),
});
