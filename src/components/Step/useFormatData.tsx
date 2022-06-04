import { useEffect, useState } from 'react';

import STEP_DATA_136_1 from 'data/step/step_136_0226_____1_.json';
import STEP_DATA_136_2 from 'data/step/step_136_0308_____1_.json';
import STEP_DATA_136_3 from 'data/step/step_136_0419_____1_.json';

import STEP_DATA_328_1 from 'data/step/step_328_0416_____2_.json';
import STEP_DATA_328_2 from 'data/step/step_328_0419_____2_.json';
import STEP_DATA_328_3 from 'data/step/step_328_0420_____2_.json';

import STEP_DATA_380_1 from 'data/step/step_380_0417_____3_.json';
import STEP_DATA_380_2 from 'data/step/step_380_0418_____3_.json';
import STEP_DATA_380_3 from 'data/step/step_380_0419_____3_.json';

import { useRecoilValue } from 'recoil';
import { pickedMemberInfo, stepDateState } from 'recoil/member.atom';
import transformatData from './transformatData';

interface IData {
  dataList: any[];
  isDays: boolean;
}

const STEP_DATA = {
  136: [...STEP_DATA_136_1.reverse(), ...STEP_DATA_136_2.reverse(), ...STEP_DATA_136_3.reverse()],
  328: [...STEP_DATA_328_1.reverse(), ...STEP_DATA_328_2.reverse(), ...STEP_DATA_328_3.reverse()],
  380: [...STEP_DATA_380_1.reverse(), ...STEP_DATA_380_2.reverse(), ...STEP_DATA_380_3.reverse()],
};

const useFormatData = () => {
  const dateState = useRecoilValue(stepDateState);
  const memberInfo = useRecoilValue(pickedMemberInfo);

  const memberSeq = memberInfo?.memSeq;
  const { start: startDate, newEnd: endDate } = dateState;
  const [data, setData] = useState<IData>({ dataList: [], isDays: false });

  useEffect(() => {
    if (!memberSeq || !startDate || !endDate) return;
    const result = transformatData(STEP_DATA, {
      memberSeq,
      startDate,
      endDate,
    });
    setData(result);
  }, [memberSeq, startDate, endDate]);

  return data;
};

export default useFormatData;
