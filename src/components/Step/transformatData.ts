import { IStepData } from '../../types/index';

const transformatData = (STEP_DATA: IStepData[]) => {
  const result = STEP_DATA.map((item) => {
    return { x: item.crt_ymdt, y: item.steps };
  }).reverse();

  const result2 = [];
  for (let i = 0; i < result.length; i += 1) {
    if (i + 1 > result.length - 1) break;

    const ave = (result[i + 1].y - result[i].y) / 10;

    result2.push({ x: result[i].x, y: result[i].y });
    let accSteps = result[i].y;
    for (let j = 0; j < 8; j += 1) {
      accSteps += ave;
      const tmp2 = { x: result[i].x, y: Math.round(accSteps) };
      result2.push(tmp2);
    }
    result2.push({ x: result[i + 1].x, y: result[i + 1].y });
  }

  return result2;
};

export default transformatData;
