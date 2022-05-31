import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryTooltip } from 'victory';
import styles from './columnChart.module.scss';
import useFormatData from './useFormatData';
import { stepDateState } from 'recoil/member.atom';
import DateForm from './DateForm/DateForm';

const ColumnChart = () => {
  const { dataList, isDays } = useFormatData();

  return (
    <div className={styles.wrapper}>
      <VictoryChart width={800} height={400} domainPadding={{ x: isDays ? 100 : 10, y: 10 }}>
        <VictoryAxis
          dependentAxis
          offsetX={50}
          tickFormat={(tick) => `${tick}보`}
          tickLabelComponent={<VictoryLabel dx={0} textAnchor='end' />}
          style={{
            grid: { stroke: '#94A2AD' },
            tickLabels: { fontSize: 10, padding: 0 },
          }}
        />
        <VictoryBar
          data={dataList}
          x={isDays ? 'ymd' : 'time'}
          y='steps'
          labelComponent={<VictoryTooltip style={{ fontSize: 16 }} />}
        />
        <VictoryLabel x={10} y={30} text='걸음수(보)' />
        <VictoryAxis style={{ tickLabels: { angle: 0, fontSize: 10 } }} fixLabelOverlap />
      </VictoryChart>
      <DateForm atomState={stepDateState} />
    </div>
  );
};
export default ColumnChart;
