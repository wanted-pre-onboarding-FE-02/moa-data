import StepChart from './StepChart/StepChart';
import { IStepData } from '../../types';
import dataFilter from './dataFilter';

import styles from './numbersStep.module.scss';

// interface IProps {
//   id: string;
//   date: string;
//   memSeq: string;
// }

interface IUserData {
  usersignInDate: string;
  userSeq: number;
}

interface IStep {
  x: string;
  y: number;
}

const NumbersStep = ({ usersignInDate, userSeq }: IUserData) => {
  console.log(usersignInDate, userSeq);
  dataFilter
  // const result = 
  // const result: IStep[] = [];

  // datas.forEach((_data) => {
  //   result.push({
  //     x: _data.crt_ymdt,
  //     y: _data.steps,
  //   });
  // });
  // console.log(result);
  return (
    <div className={styles.numbersStep}>
      <p className={styles.title}>걸음수</p>
      <StepChart personNum={userSeq} />
      <div className={styles.info}>
        <p className={styles.date}>2022-04-20</p>
        <p className={styles.total}>총 13,203걸음</p>
        <div className={styles.date}>
          <div className={styles.period}>
            <p>조회기간</p>
            {/* <input type='text' readOnly value={propsData.startDate} />
            <span> ~ </span>
            <input type='text' readOnly value={propsData.endDate} /> */}
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
