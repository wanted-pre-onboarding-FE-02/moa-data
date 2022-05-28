const TODAY = new Date('2022-04-20');

export const btnData = [
  {
    text: '오늘',
    startVal: TODAY,
    endVal: TODAY,
  },
  {
    text: '일주일',
    startVal: new Date('2022-04-13'),
    endVal: TODAY,
  },
  {
    text: '전체',
    startVal: null,
    endVal: null,
  },
];

export const TABLE_TITLE = ['회원번호', '가입일', '로그인ID', '상세'];

export const DUMMY_DATA = [
  { id: 'hello111', date: '2022-02-15 17:51:29', memSeq: 136 },
  { id: 'catcatcat', date: '2022-04-16 17:55:29', memSeq: 328 },
  { id: 'hihi222', date: '2022-04-13 16:55:29', memSeq: 380 },
]; // 전역 상태 관리 라이브러리 써야하나..
