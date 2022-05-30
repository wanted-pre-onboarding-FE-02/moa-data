import _ from 'lodash';
// import dayjs from 'dayjs';

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
  const DayArray: string[] = [];
  STEP_DATA.forEach((item) => {
    const day = item.crt_ymdt.split(' ')[0];
    if (!DayArray.includes(day)) {
      DayArray.push(day);
    }
  });

  const arr = [];
  for (let i = 0; i < DayArray.length; i += 1) {
    arr.push(STEP_DATA.find((item) => item.crt_ymdt.split(' ')[0] === DayArray[i]));
  }

  const result = arr.map((item) => {
    const date = item?.crt_ymdt.split(' ')[0];
    return { date, daySteps: item?.steps };
  });
  console.log(result);

  return _.uniqBy(result, 'date');
};

export default transformatDataDay;
