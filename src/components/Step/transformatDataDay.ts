import _ from 'lodash';
import dayjs from 'dayjs';

interface IStepData {
  seq: number;
  member_seq: number;
  steps: number;
  minutes: number;
  distance: number;
  calorie: number;
  crt_ymdt: string;
}

const transformatDataDay = (STEP_DATA: IStepData[]) => {
  const date = STEP_DATA[0]?.crt_ymdt.split(' ')[0]; // 최초 날짜만 가져오기
  const result = [];
  result.push({ date, steps: STEP_DATA[0]?.steps });

  return _.uniqBy(result, 'time');
};

export default transformatDataDay;
