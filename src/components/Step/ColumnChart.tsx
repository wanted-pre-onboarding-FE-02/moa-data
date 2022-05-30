import { VictoryAxis, VictoryBar, VictoryChart, VictoryTooltip } from 'victory';
import styles from './columnChart.module.scss';
import useFormatData from './useFormatData';

const ColumnChart = () => {
  const { dataList, isDays } = useFormatData();

  return (
    <div className={styles.wrapper}>
      <VictoryChart width={1600} height={500} domainPadding={{ x: 10, y: 10 }}>
        <VictoryBar
          data={dataList}
          x={isDays ? 'ymd' : 'time'}
          y='steps'
          labelComponent={<VictoryTooltip style={{ fontSize: 16 }} />}
        />
        <VictoryAxis dependentAxis tickFormat={(tick) => `${tick}보`} />
        <VictoryAxis style={{ tickLabels: { angle: 0 } }} fixLabelOverlap />
      </VictoryChart>
    </div>
  );
};
export default ColumnChart;
