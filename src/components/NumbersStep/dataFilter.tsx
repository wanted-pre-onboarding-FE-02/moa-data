import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import User1Step01 from '../../data/step/step_136_0226_____1_.json';
import User1Step02 from '../../data/step/step_136_0308_____1_.json';
import User1Step03 from '../../data/step/step_136_0419_____1_.json';
import User2Step01 from '../../data/step/step_328_0416_____2_.json';
import User2Step02 from '../../data/step/step_328_0419_____2_.json';
import User2Step03 from '../../data/step/step_328_0420_____2_.json';
import User3Step01 from '../../data/step/step_380_0417_____3_.json';
import User3Step02 from '../../data/step/step_380_0418_____3_.json';
import User3Step03 from '../../data/step/step_380_0419_____3_.json';

const steptData136 = [...User1Step01, ...User1Step02, ...User1Step03];
const stepData328 = [...User2Step01, ...User2Step02, ...User2Step03];
const stepData380 = [...User3Step01, ...User3Step02, ...User3Step03];

export default function dataFilter(personNum: number, date1: string, date2: string) {
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