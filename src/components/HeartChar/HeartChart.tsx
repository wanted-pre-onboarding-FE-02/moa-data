import { VictoryArea, VictoryAxis, VictoryChart, VictoryLabel } from 'victory';
import HEARTDATA1 from '../../data/heartrate/heartrate_136_0226_____1_.json';
import { IHeartData } from '../../types';

import styles from './heartChart.module.scss';

interface IProps {
  datas: IHeartData[];
}

interface IHeartBeat {
  x: string;
  y: number;
}

const HeartChart = ({ datas }: IProps) => {
  const result: IHeartBeat[] = [];
  datas.forEach((_data) => {
    result.push({ x: _data.crt_ymdt, y: _data.avg_beat });
  });

  return (
    <div className={styles.wrapper}>
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
            tickLabels: { fill: 'white' },
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
          style={{ data: { fill: 'rgba(255,150,99,0.15)', stroke: 'orange', strokeWidth: 2 } }}
        />
      </VictoryChart>
    </div>
  );
};

export default HeartChart;
