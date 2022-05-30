import _ from 'lodash';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);
interface IStepData {
  seq: number;
  member_seq: number;
  steps: number;
  minutes: number;
  distance: number;
  calorie: number;
  crt_ymdt: string;
}

interface IParam {
  memberSeq: number;
  startDate: Date;
  endDate: Date;
}

const getPerMinute = (
  arr: {
    time: dayjs.Dayjs;
    ymd: string;
    steps: number;
  }[]
) => {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (i + 1 > arr.length - 1) break;

    const ave = (arr[i + 1].steps - arr[i].steps) / 10;

    result.push({ ...arr[i], time: arr[i].time.format('HH:mm') });
    let accSteps = arr[i].steps;
    for (let j = 0; j < 8; j += 1) {
      accSteps += ave;
      const tmp2 = {
        time: arr[i].time.add(j + 1, 'm').format('HH:mm'),
        ymd: arr[i].ymd,
        steps: Math.round(accSteps),
      };
      result.push(tmp2);
    }
    result.push({ ...arr[i + 1], time: arr[i + 1].time.format('HH:mm') });
  }
  return _.uniqBy(result, 'time');
};

const transformatData = (STEP_DATA: Record<number, IStepData[]>, { memberSeq, startDate, endDate }: IParam) => {
  const result = STEP_DATA[memberSeq]
    .filter((item) => dayjs(item.crt_ymdt).isBetween(startDate, endDate, undefined, '[]'))
    .map((item) => {
      const time = dayjs(item.crt_ymdt);

      return { time, ymd: item.crt_ymdt.split(' ')[0], steps: item.steps };
    });

  const groupData = _.groupBy(result, 'ymd');
  if (Object.keys(groupData).length > 1) {
    const result2 = [];
    for (const key in groupData) {
      if (Object.prototype.hasOwnProperty.call(groupData, key)) {
        const { length } = groupData[key];
        result2.push({ ymd: key, steps: groupData[key][length - 1].steps });
      }
    }
    return { dataList: result2, isDays: true };
  }

  const result2 = getPerMinute(result);
  return { dataList: result2, isDays: false };
};

export default transformatData;
