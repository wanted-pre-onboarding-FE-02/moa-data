import styles from './numbersStep.module.scss';
import StepChart from './StepChart.tsx/StepChart';

const propsData = {
  personNum: 380,
  startDate: '2022-02-26',
  endDate: '2022-04-19',
};

const NumbersStep = () => {
  return (
    <div className={styles.numbersStep}>
      <p className={styles.title}>걸음수</p>
      <StepChart personNum={propsData.personNum} startDate={propsData.startDate} endDate={propsData.endDate} />
      <div className={styles.info}>
        <p className={styles.date}>2022-04-20</p>
        <p className={styles.total}>총 13,203걸음</p>
        <div className={styles.date}>
          <div className={styles.period}>
            <p>조회기간</p>
            <input type='text' readOnly value={propsData.startDate} />
            <span> ~ </span>
            <input type='text' readOnly value={propsData.endDate} />
          </div>
          <div className={styles.buttonWrap}>
            <button type='button'>오늘</button>
            <button type='button'>1주일</button>
            <button type='button'>전체</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumbersStep;
