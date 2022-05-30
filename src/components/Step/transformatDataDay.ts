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

interface IConvertData {
  time: string | undefined;
  steps: number | undefined;
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

  const resultArr: IConvertData[] = [];

  arr.forEach((item) => {
    const date = item?.crt_ymdt.split(' ')[0];
    const convertData = { time: date, steps: item?.steps };
    resultArr.push(convertData);

    // console.log(date);
    // return { date, daySteps: item?.steps };
    // return { time: date, steps: item?.steps };
  });
  // console.log(resultArr);
  return resultArr;

  // return _.uniqBy(resultArr, 'date');
};

export default transformatDataDay;
