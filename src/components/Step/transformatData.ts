import { IStepData } from '../../types/index';

const transformatData = (STEP_DATA: IStepData[]) => {
  const result = STEP_DATA.map((item) => {
    return { steps: item.steps, crt_ymdt: item.crt_ymdt };
  }).reverse();

  const result2 = [];
  for (let i = 0; i < result.length; i += 1) {
    if (i + 1 > result.length - 1) break;

    const ave = (result[i + 1].steps - result[i].steps) / 10;

    result2.push({ steps: result[i].steps, crt_ymdt: result[i].crt_ymdt });
    let accSteps = result[i].steps;
    for (let j = 0; j < 8; j += 1) {
      accSteps += ave;
      const tmp2 = { steps: Math.round(accSteps), crt_ymdt: result[i].crt_ymdt };
      result2.push(tmp2);
    }
    result2.push({ steps: result[i + 1].steps, crt_ymdt: result[i + 1].crt_ymdt });
  }

  return result2;
};

export default transformatData;
