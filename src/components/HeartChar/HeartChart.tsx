import { VictoryArea, VictoryAxis, VictoryChart, VictoryLabel } from 'victory';
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

const heartArr = [...HEARTDATA1];

interface IHeartBeat {
  x: string;
  y: number;
}
const filterData = () => {
  const result: IHeartBeat[] = [];
  heartArr.map((_data) => {
    result.push({ x: _data.crt_ymdt, y: _data.avg_beat });
  });
  return result.reverse();
};

const HeartChart = () => {
  // const date = '2022-02-26 20:21:31';
  // const month = date.split('-', 2);
  // const heartArr = [...HEARTDATA1, ...HEARTDATA2, ...HEARTDATA3];
  // const monthFilterData = heartArr.filter((item) => item.crt_ymdt.split('-', 2)[1] === month[1]);

  const newData = filterData();
  return (
    <VictoryChart width={800} height={400} domain={{ y: [0.4, 1] }} style={{ background: { fill: 'black' } }}>
      <VictoryLabel x={15} y={15} text='BPM' style={{ fill: 'orange' }} />
      <VictoryAxis
        dependentAxis
        orientation='left'
        offsetX={50}
        tickValues={[0.4, 0.54, 0.7, 0.84, 1]}
        style={{ tickLabels: { fill: 'white' } }}
        tickFormat={(t) => `${t * 150}`}
      />
      <VictoryAxis
        // scale='time'
        style={{
          ticks: {
            size: ({ tick }) => {
              // const tickSize = tick.getFullYear() % 5 === 0 ? 10 : 5;
              console.log(tick);
              const tickSize = 4;
              return tickSize;
            },
            stroke: 'white',
            strokeWidth: 1,
          },
          tickLabels: { fill: 'white' },
        }}
        tickFormat={(t, i) => {
          if (i % 6 === 0) {
            const stringDate = new Date(t);
            return `${stringDate}`;
          }
          return '';
        }}
      />
      <VictoryArea
        data={newData}
        y={(datum) => datum.y / 150}
        interpolation='monotoneX'
        style={{ data: { fill: 'red', stroke: 'orange', strokeWidth: 2 } }}
      />
    </VictoryChart>
  );
};

export default HeartChart;
