import { IStep } from '../types/step';

export type Data = {
  x: string;
  y: number;
};

export const convertData = (data: IStep[]) => {
  const step: Data[] = [];

  data.forEach((d) => {
    step.push({
      x: d.crt_ymdt,
      y: d.steps,
    });
  });

  return {
    step,
  };
};
