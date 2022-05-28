import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import STEP_DATA_01_1 from '../data/step/step_136_0226_____1_.json';
import STEP_DATA_01_2 from '../data/step/step_136_0308_____1_.json';
import STEP_DATA_01_3 from '../data/step/step_136_0419_____1_.json';
import STEP_DATA_02_1 from '../data/step/step_328_0416_____2_.json';
import STEP_DATA_02_2 from '../data/step/step_328_0419_____2_.json';
import STEP_DATA_02_3 from '../data/step/step_328_0420_____2_.json';
import STEP_DATA_03_1 from '../data/step/step_380_0417_____3_.json';
import STEP_DATA_03_2 from '../data/step/step_380_0418_____3_.json';
import STEP_DATA_03_3 from '../data/step/step_380_0419_____3_.json';

// const Person1Data = [...STEP_DATA_01_1, ...STEP_DATA_01_2, ...STEP_DATA_01_3];

const data = [
  ...STEP_DATA_01_1,
  ...STEP_DATA_01_2,
  ...STEP_DATA_01_3,
  ...STEP_DATA_02_1,
  ...STEP_DATA_02_1,
  ...STEP_DATA_02_1,
  ...STEP_DATA_03_1,
  ...STEP_DATA_03_1,
  ...STEP_DATA_03_1,
];

console

export default function dateFilter(personNum: number, date1: string, date2: string) {
  dayjs.extend(isBetween);
  const startDate = dayjs(date1).subtract(1, 'd');
  const endDate = dayjs(date2).add(1, 'd');

  const personalData = {
    136: Person1Data,
    328: Person2Data,
    380: Person3Data,
  }[personNum];

  const matchedArr = Object.keys(personalData);

  // const filteredDate = keyArr.filter((data) => dayjs(data).isBetween(startDate, endDate));

  // console.log(date1, date2);
  // // const keyArr = Object.keys(Person3Data);
  // console.log(keyArr);
  // const matchedDay = keyArr.filter((date) => dayjs(date).isBetween(date1, date2));
  // console.log(matchedDay);
  // const arr = personalData(personNum);
  // console.log(personalData(personNum));
  // if (personalData(personNum)) {
  //   console.log(Object.keys(personalData<Object>(personNum)));
  // }

  const date = dayjs('2022-03-08');

  // console.log(personalData, startDate, endDate);
  // console.log(dayjs(date1));
  // console.log(dayjs(date2));

  // console.log(date.isBetween(date1, date2));

  // Object.filter = (mainObject, filterFunc) => {
  //   Object.keys(mainObject).filter((ObjectKey) => filterFunc(mainObject[ObjectKey])).reduce((result, ObjectKey) => (result[ObjectKey]), {});
  // }

  // const newArr = {...personalData};

  // console.log(Object.keys(personalData));
  // console.log(Object.entries(personalData));
  // console.log(Object.keys(personalData));
  // const filteredData = DAILY_TREND_DATA.filter((data) => dayjs(data.date).isBetween(startDate, endDate));

  return personNum;
}
