import DateForm from 'components/DateForm/DateForm';
import { btnData } from 'components/SearchForm/List/ListConstant';
import dayjs from 'dayjs';
import { FormEvent, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { heartDataState, heartDateState, pickedMemberInfo } from 'recoil/member.atom';
import { IDate } from 'types';
import { VictoryArea, VictoryAxis, VictoryChart, VictoryLabel } from 'victory';
import styles from './heartChart.module.scss';

interface IHeartBeat {
  x: string;
  y: number;
}

const HeartChart = () => {
  const heartData = useRecoilValue(heartDataState); // 전체 데이터
  const [dateState, setDateState] = useRecoilState<IDate>(heartDateState);
  const [filterResult, setFilterData] = useState<IHeartBeat[]>([]); // 필터된 데이터
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

  const handledDateBtnClick = (e: FormEvent<HTMLButtonElement>) => {
    const { keyword } = e.currentTarget.dataset;
    const dataArr = btnData.find((btn) => btn.text === keyword);
    if (dataArr) {
      setDateState({ start: dataArr.startVal, newEnd: dataArr.endVal });
    }
  };

  let Today = filterResult.length !== 0 && filterResult[0].x.slice(0, 10);

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
              if (filterResult.length > 60) {
                if (Today === t.slice(0, 10)) {
                  if (i % 30 === 0) {
                    const stringDate = String(new Date(t));
                    return `${stringDate.slice(16, 21)}`;
                  }
                  return '';
                }
                Today = t.slice(0, 10);
                return `${t.slice(8, 10)}일`;
              }
              if (filterResult.length <= 60) {
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
      <DateForm dateState={dateState} setDateState={setDateState} />
      {btnData.map((d) => (
        <button type='button' key={`btns-${d.text}`} onClick={handledDateBtnClick} data-keyword={d.text}>
          {d.text}
        </button>
      ))}
    </>
  );
};

export default HeartChart;
