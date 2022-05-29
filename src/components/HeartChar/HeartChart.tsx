import DateForm from 'components/DateForm/DateForm';
import { btnData } from 'components/SearchForm/List/ListConstant';
import dayjs from 'dayjs';
import { FormEvent, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { heartDataState, heartDateState, pickedMemberInfo } from 'recoil/member.atom';
import { IDate, IHeartData } from 'types';
import { VictoryArea, VictoryAxis, VictoryChart, VictoryLabel } from 'victory';
import styles from './heartChart.module.scss';

interface IHeartBeat {
  x: string;
  y: number;
}

const HeartChart = () => {
  const heartData = useRecoilValue(heartDataState); // 전체 데이터
  const [dateState, setDateState] = useRecoilState<IDate>(heartDateState);
  const [filterData, setFilterData] = useState<IHeartData[]>([]); // 필터된 데이터
  const memberInfo = useRecoilValue(pickedMemberInfo);
  const [counter, setCounter] = useState(0);

  const result: IHeartBeat[] = []; // 뿌려주는 전체 데이터
  const filterResult: IHeartBeat[] = []; // 뿌려주는 필터된 데이터

  heartData &&
    heartData.forEach((_data) => {
      result.push({ x: _data.crt_ymdt, y: _data.avg_beat });
    });

  filterData &&
    filterData.forEach((_data) => {
      filterResult.push({ x: _data.crt_ymdt, y: _data.avg_beat });
    });

  useEffect(() => {
    if (!heartData || !memberInfo) return;

    const nullStartDate = dateState.start === null ? memberInfo.date : dateState.start;
    const nullEndDate = dateState.end === null ? '2022-04-20' : dateState.end;

    const filteredDateData = heartData.filter((date) => dayjs(date.crt_ymdt).isBetween(nullStartDate, nullEndDate));
    if (filteredDateData.length === 0) {
      setFilterData([]);
      return;
    }
    setFilterData(filteredDateData);
  }, [dateState.end, dateState.start]);

  const handledDateBtnClick = (e: FormEvent<HTMLButtonElement>) => {
    setCounter(counter + 1);
    const { keyword } = e.currentTarget.dataset;
    const dataArr = btnData.find((btn) => btn.text === keyword);
    if (dataArr) {
      setDateState({ start: dataArr.startVal, end: dataArr.endVal });
    }
  };

  // console.log(heartData);

  return (
    <>
      <div className={styles.wrapper}>
        <VictoryChart width={800} height={400} domain={{ y: [0.4, 1] }} style={{ background: { fill: 'black' } }}>
          <VictoryLabel x={15} y={15} text='BPM' style={{ fill: 'orange' }} />
          <VictoryAxis
            dependentAxis
            orientation='left'
            offsetX={50}
            tickValues={[0.4, 0.54, 0.7, 0.84, 1]}
            style={{ tickLabels: { fill: 'white' } }}
            tickFormat={(t) => `${t * 160}`}
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
          {/* filterData.length !== 0 ? filterResult.reverse() : result.reverse() */}
          <VictoryArea
            data={counter === 0 ? result.reverse() : filterResult.reverse()}
            y={(datum) => datum.y / 160}
            interpolation='monotoneX'
            style={{ data: { fill: 'rgba(255,150,99,0.15)', stroke: 'orange', strokeWidth: 2 } }}
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
