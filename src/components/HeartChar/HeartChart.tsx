import React from 'react';
import { VictoryArea, VictoryChart } from 'victory';
import HEARTDATA1 from '../../data/heartrate/heartrate_136_0226_____1_.json';
import HEARTDATA2 from '../../data/heartrate/heartrate_136_0308_____1_.json';
import HEARTDATA3 from '../../data/heartrate/heartrate_136_0419_____1_.json';

const data = [
  { x: new Date(2021, 5, 1), y: 8 },
  { x: new Date(2021, 5, 2), y: 10 },
  { x: new Date(2021, 5, 3), y: 7 },
  { x: new Date(2021, 5, 4), y: 4 },
  { x: new Date(2021, 5, 7), y: 6 },
  { x: new Date(2021, 5, 8), y: 3 },
  { x: new Date(2021, 5, 9), y: 7 },
  { x: new Date(2021, 5, 10), y: 9 },
  { x: new Date(2021, 5, 11), y: 6 },
];

const HeartChart = () => {
  const date = '2022-02-26 20:21:31';
  const month = date.split('-', 2);
  const heartArr = [...HEARTDATA1, ...HEARTDATA2, ...HEARTDATA3];
  const monthFilterData = heartArr.filter((item) => item.crt_ymdt.split('-', 2)[1] === month[1]);

  return (
    <VictoryChart width={400} height={400}>
      <VictoryArea
        data={data}
        interpolation='monotoneX'
        style={{ data: { fill: 'rgba(0,0,0,0.5)', stroke: 'orange', strokeWidth: 2 } }}
      />
    </VictoryChart>
  );
};

export default HeartChart;
