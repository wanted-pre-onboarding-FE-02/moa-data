import { VictoryArea, VictoryAxis, VictoryChart, VictoryLabel } from 'victory';
import HEARTDATA1 from '../../data/heartrate/heartrate_136_0226_____1_.json';
import HEARTDATA2 from '../../data/heartrate/heartrate_136_0308_____1_.json';
import HEARTDATA3 from '../../data/heartrate/heartrate_136_0419_____1_.json';

interface IHeartBeat {
  x: string;
  y: number;
}
// 136 1
// 328 2
// 380 3

const HeartChart = () => {
  const date = '2022-02-26 20:01:31';
  const slice = date.split('-', 2);
  const dateArr = {
    '02': HEARTDATA1,
    '03': HEARTDATA2,
    '04': HEARTDATA3,
  }[slice[1]];
  const heartData = dateArr || [];
  const heartArr = [...heartData];

  const result: IHeartBeat[] = [];
  heartArr.map((_data) => {
    result.push({ x: _data.crt_ymdt, y: _data.avg_beat });
  });

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
        style={{
          ticks: {
            size: ({ index }) => {
              const tickSize = Number(index) % 3 === 0 && Number(index) % 6 !== 0 ? 5 : 0;

              return tickSize;
            },
            stroke: 'white',
            strokeWidth: 1,
          },
          tickLabels: { fill: 'black' },
        }}
        tickFormat={(t, i) => {
          if (i % 6 === 0) {
            const stringDate = String(new Date(t));
            return `${stringDate.slice(16, 24)}`;
          }
          return '';
        }}
      />
      <VictoryArea
        data={result.reverse()}
        y={(datum) => datum.y / 150}
        interpolation='monotoneX'
        style={{ data: { fill: 'red', stroke: 'orange', strokeWidth: 2 } }}
      />
    </VictoryChart>
  );
};

export default HeartChart;
