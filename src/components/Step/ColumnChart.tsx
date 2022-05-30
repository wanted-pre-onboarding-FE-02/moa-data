import DateForm from 'components/DateForm/DateForm';
import { btnData } from 'components/SearchForm/List/ListConstant';
import dayjs from 'dayjs';
import { FormEvent, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { stepDataState, stepDateState, pickedMemberInfo } from 'recoil/member.atom';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel } from 'victory';
import { IDate, ITransformStepData } from 'types';
import transformatData from './transformatData';
import styles from './columnChart.module.scss';

const ColumnChart = () => {
  const stepData = useRecoilValue(stepDataState);
  const dataList = transformatData(stepData as any);
  const [dateState, setDateState] = useRecoilState<IDate>(stepDateState);
  const [filterData, setFilterData] = useState<ITransformStepData[]>([]); // 필터된 데이터
  const memberInfo = useRecoilValue(pickedMemberInfo);

  useEffect(() => {
    if (!stepData || !memberInfo) return;
    const nullStartDate = dateState.start === null ? memberInfo.date : dateState.start;
    const nullEndDate = dateState.newEnd === null ? '2022-04-20' : dateState.newEnd;
    const filteredDateData = dataList.filter((date) => dayjs(date.x).isBetween(nullStartDate, nullEndDate));
    if (filteredDateData.length === 0) {
      setFilterData([]);
      return;
    }
    setFilterData(filteredDateData);
  }, [dateState.newEnd, dateState.start, memberInfo]);

  const handledDateBtnClick = (e: FormEvent<HTMLButtonElement>) => {
    const { keyword } = e.currentTarget.dataset;
    const dataArr = btnData.find((btn) => btn.text === keyword);
    if (dataArr) {
      setDateState({ start: dataArr.startVal, newEnd: dataArr.endVal });
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <VictoryChart width={800} height={400} domain={{ y: [0, 1] }} domainPadding={{ x: 10, y: 10 }}>
          <VictoryLabel x={15} y={15} text='걸음' style={{ fill: 'black' }} />
          <VictoryAxis
            dependentAxis
            orientation='left'
            offsetX={50}
            tickValues={[0, 0.25, 0.5, 0.75, 1]}
            style={{ tickLabels: { fill: 'black' } }}
            tickFormat={(t) => `${t * 25000}`}
          />
          <VictoryAxis
            style={{
              ticks: {
                size: ({ index }) => {
                  const tickSize = Number(index) % 3 === 0 && Number(index) % 6 !== 0 ? 5 : 0;
                  return tickSize;
                },
                stroke: 'black',
                strokeWidth: 1,
              },
              tickLabels: { fill: 'black', angle: 0 },
            }}
            tickFormat={(t, i) => {
              if (i % 6 === 0) {
                const stringDate = String(new Date(t));
                return `${stringDate.slice(16, 24)}`;
              }
              return '';
            }}
          />
          <VictoryBar data={filterData} y={(datum) => datum.y / 25000} style={{ data: { fill: 'orange' } }} />
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
export default ColumnChart;
