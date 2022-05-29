import firUserStep1 from '../data/step/step_136_0226_____1_.json';
import firUserStep2 from '../data/step/step_136_0308_____1_.json';
import firUserStep3 from '../data/step/step_136_0419_____1_.json';

import secUserStep1 from '../data/step/step_328_0416_____2_.json';
import secUserStep2 from '../data/step/step_328_0419_____2_.json';
import secUserStep3 from '../data/step/step_328_0420_____2_.json';

import thirUserStep1 from '../data/step/step_380_0417_____3_.json';
import thirUserStep2 from '../data/step/step_380_0418_____3_.json';
import thirUserStep3 from '../data/step/step_380_0419_____3_.json';

const stepData136 = [...firUserStep1, ...firUserStep2, ...firUserStep3];
const stepData328 = [...secUserStep1, ...secUserStep2, ...secUserStep3];
const stepData380 = [...thirUserStep1, ...thirUserStep2, ...thirUserStep3];

export default function getUserStepInfo(memSeq: number) {
  return {
    136: stepData136,
    328: stepData328,
    380: stepData380,
  }[memSeq];
}
