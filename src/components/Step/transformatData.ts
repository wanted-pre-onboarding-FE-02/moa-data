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

const transformatData = (STEP_DATA: IStepData[]) => {
  const result = STEP_DATA.map((item) => {
    const time = dayjs(item.crt_ymdt);

    return { time, steps: item.steps };
  }).reverse();

  const result2 = [];
  for (let i = 0; i < result.length; i += 1) {
    if (i + 1 > result.length - 1) break;

    const ave = (result[i + 1].steps - result[i].steps) / 10;

    result2.push({ time: result[i].time.format('HH:mm'), steps: result[i].steps });
    let accSteps = result[i].steps;
    for (let j = 0; j < 8; j += 1) {
      accSteps += ave;
      const tmp2 = { time: result[i].time.add(j + 1, 'm').format('HH:mm'), steps: Math.round(accSteps) };
      result2.push(tmp2);
    }
    result2.push({ time: result[i + 1].time.format('HH:mm'), steps: result[i + 1].steps });
  }

  return _.uniqBy(result2, 'time');
};

export default transformatData;
