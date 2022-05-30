import { FormEvent, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import dayjs from 'dayjs';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryStack, VictoryTooltip } from 'victory';

import { stepDataState, stepDateState, pickedMemberInfo } from 'recoil/member.atom';
import { IDate, IStepData } from 'types';
import styles from './columnChart.module.scss';

import transformatData from './transformatData';
import transformatDataDay from './transformatDataDay';
import DateForm from 'components/DateForm/DateForm';
import { btnData } from 'components/SearchForm/List/ListConstant';

const ColumnChart = () => {
  const stepData = useRecoilValue(stepDataState); // 전체 데이터
  const [dateState, setDateState] = useRecoilState<IDate>(stepDateState);
  const [filterData, setFilterData] = useState<IStepData[]>([]); // 기간으로 필터된 데이터
  // const [dataMinute, setDataMinute] = useState();
  const dataMinuteList = filterData && transformatData(filterData); // 필터된 데이터 를 분 단위로 쪼갬(오늘 버튼 클릭)
  const dataDayList = filterData && transformatDataDay(filterData); // 필터된 데이터를 날짜별로 나타냄(일주일, 전체 버튼 클릭)

  // console.log(dataDayList);

  // console.log('dataMinuteList', dataMinuteList);
  // console.log('dataDayList', dataDayList);

  const memberInfo = useRecoilValue(pickedMemberInfo);
  const [isInitialData, setIsInitialData] = useState(true);

  useEffect(() => {
    if (!stepData || !memberInfo) return;
    const nullStartDate = dateState.start === null ? memberInfo.date : dateState.start;
    const nullEndDate = dateState.newEnd === null ? '2022-04-21' : dateState.newEnd;

    const filteredDateData = stepData.filter((date) => dayjs(date.crt_ymdt).isBetween(nullStartDate, nullEndDate));
    if (filteredDateData.length === 0) {
      setFilterData([]);
      return;
    }
    setFilterData(filteredDateData);
  }, [dateState.newEnd, dateState.start, stepData, memberInfo]);

  const handledDateBtnClick = (e: FormEvent<HTMLButtonElement>) => {
    setIsInitialData(false);
    const { keyword } = e.currentTarget.dataset;
    const dataArr = btnData.find((btn) => btn.text === keyword);
    if (dataArr) {
      setDateState({ start: dataArr.startVal, newEnd: dataArr.endVal });
    }
  };

  // 하루 데이터를 분단위로 보여줄지 & 일별 데이터로 보여줄지 결정
  const handleSelectedData = () => (dataDayList.length < 2 ? dataMinuteList : dataDayList);
  // console.log(handleSelectedData());

  return (
    <div className={styles.wrapper}>
      <VictoryChart width={800} height={400} domainPadding={{ x: 180, y: 10 }}>
        {/* {handleVictoryAxis()} */}
        <VictoryBar
          data={handleSelectedData()}
          x='time'
          y='steps'
          labelComponent={<VictoryTooltip style={{ fontSize: 16 }} />}
        />
        {/* <VictoryBar
          data={dataMinuteList}
          x='time'
          y='steps'
          labelComponent={<VictoryTooltip style={{ fontSize: 16 }} />}
        /> */}
        {/* <VictoryBar
          data={dataDayList}
          x='date'
          y='daySteps'
          labelComponent={<VictoryTooltip style={{ fontSize: 16 }} />}
        /> */}
        <VictoryLabel x={10} y={30} text='걸음수(보)' style={{ fill: 'orange' }} />
        <VictoryAxis dependentAxis offsetX={50} tickFormat={(tick) => `${tick}`} />
        <VictoryAxis style={{ tickLabels: { angle: 0 } }} fixLabelOverlap />
        {/* <VictoryAxis
          tickFormat={['광고비', '매출', '노출수', '클릭수', '전환수']}
          style={{
            tickLabels: { fontSize: 15 },
          }}
        /> */}
      </VictoryChart>
      <DateForm dateState={dateState} setDateState={setDateState} />
      {btnData.map((d) => (
        <button type='button' key={`btns-${d.text}`} onClick={handledDateBtnClick} data-keyword={d.text}>
          {d.text}
        </button>
      ))}
    </div>
  );
};

export default ColumnChart;
