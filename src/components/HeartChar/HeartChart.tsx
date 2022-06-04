import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import dayjs from 'dayjs';
import { VictoryArea, VictoryAxis, VictoryChart, VictoryLabel } from 'victory';
import { heartDataState, heartDateState, pickedMemberInfo } from 'recoil/member.atom';
import { IDate } from 'types';
import DateForm from 'components/Step/DateForm/DateForm';
import styles from './heartChart.module.scss';

interface IHeartBeat {
  x: string;
  y: number;
}

const HeartChart = () => {
  const heartData = useRecoilValue(heartDataState);
  const dateState = useRecoilValue<IDate>(heartDateState);
  const [filterResult, setFilterData] = useState<IHeartBeat[]>([]);
  const memberInfo = useRecoilValue(pickedMemberInfo);

  useEffect(() => {
    const result: IHeartBeat[] = [];
    heartData.forEach((_data) => {
      result.push({ x: _data.crt_ymdt, y: _data.avg_beat });
    });

    const nullStartDate = dateState.start === null ? memberInfo.date : dateState.start;
    const nullEndDate = dateState.newEnd === null ? '2022-04-13' : dateState.newEnd;
    const resultFilter = result.filter((data) => dayjs(data.x).isBetween(nullStartDate, nullEndDate));

    setFilterData(resultFilter);
  }, [dateState.newEnd, dateState.start, heartData, memberInfo]);

  return (
    <>
      <div className={styles.wrapper}>
        <VictoryChart width={800} height={400} domain={{ y: [0.1, 1] }} style={{ background: { fill: 'black' } }}>
          <VictoryLabel x={15} y={15} text='BPM' style={{ fill: 'orange' }} />
          <VictoryAxis
            dependentAxis
            orientation='left'
            offsetX={50}
            tickValues={[0.2, 0.35, 0.54, 0.7, 0.84, 1]}
            style={{ tickLabels: { fill: 'white' } }}
            tickFormat={(t) => `${t * 160}`}
          />
          <VictoryAxis
            style={{
              ticks: {
                size: 5,
                stroke: 'white',
                strokeWidth: 1,
              },
              tickLabels: { fill: 'white', fontSize: 12 },
            }}
            tickFormat={(t, i) => {
              if (filterResult.length > 65) {
                if (i % 55 === 0) {
                  return `${t.slice(5, 10)}일`;
                }
                return '';
              }
              if (filterResult.length <= 65) {
                if (i % 6 === 0) {
                  const stringDate = String(new Date(t));
                  return `${stringDate.slice(16, 21)}`;
                }
              }
              return '';
            }}
          />

          <VictoryArea
            data={filterResult}
            y={(datum) => datum.y / 160}
            interpolation='monotoneX'
            style={{
              data: { fill: 'rgba(255,150,99,0.15)', stroke: 'orange', strokeWidth: 2 },
            }}
          />
        </VictoryChart>
      </div>
      <DateForm atomState={heartDateState} />
    </>
  );
};

export default HeartChart;
