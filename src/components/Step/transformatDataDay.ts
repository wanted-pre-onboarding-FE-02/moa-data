import { IStepData } from 'types';

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
  });
  return resultArr;
};

export default transformatDataDay;
