import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryStack, VictoryTooltip } from 'victory';
import styles from './columnChart.module.scss';
import transformatData from './transformatData';
import STEP_DATA from 'data/step/step_136_0226_____1_.json';

const ColumnChart = () => {
  const dataList = transformatData(STEP_DATA);
  // console.log(dataList);
  return (
    <div className={styles.wrapper}>
      <VictoryChart width={400} height={200} domainPadding={{ x: 100, y: 10 }}>
        <VictoryStack>
          <VictoryBar data={dataList} x='time' y='steps' labelComponent={<VictoryTooltip style={{ fontSize: 16 }} />} />
        </VictoryStack>
        {/* <VictoryAxis dependentAxis offsetX={10} tickFormat={(tick) => `${tick}보`} /> */}
        <VictoryAxis style={{ tickLabels: { angle: 0 } }} fixLabelOverlap />
        {/* <VictoryAxis
          tickFormat={['광고비', '매출', '노출수', '클릭수', '전환수']}
          style={{
            tickLabels: { fontSize: 15 },
          }}
        /> */}
      </VictoryChart>
    </div>
  );
};
export default ColumnChart;
