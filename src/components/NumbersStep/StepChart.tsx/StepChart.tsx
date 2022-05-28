import styles from './stepChart.module.scss';
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory';
import dateFilter from '../../../utils/dateFilter';

const dateRangeFunc = (paramDate: Date): string => {
  return `${paramDate.getFullYear()}-${paramDate.getMonth() + 1}-${paramDate.getDate()}`;
};

interface IProps {
  personNum: number; // 회원 번호
  startDate: string; // 가입일
  endDate: string;
}

const StepChart = ({ personNum, startDate, endDate }: IProps) => {
  const matchedData = dateFilter(personNum, startDate, endDate);

  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];
  return (
    <div className={styles.stepChart}>
      <VictoryChart>
        <VictoryAxis tickValues={[1, 2, 3, 4]} tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']} />
        <VictoryAxis dependentAxis tickFormat={(x) => `${x}보`} />
        <VictoryBar data={data} x='quarter' y='earnings' />
      </VictoryChart>
    </div>
  );
};

export default StepChart;
