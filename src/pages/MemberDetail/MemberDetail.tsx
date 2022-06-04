import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { heartDataState, pickedMemberInfo, stepDataState } from 'recoil/member.atom';
import MemberInfo from 'components/MemberInfo/MemberInfo';
import { DUMMY_DATA } from 'components/SearchForm/List/ListConstant';
import ColumnChart from 'components/Step/ColumnChart';
import HeartChart from 'components/HeartChar/HeartChart';
import getUserHeartInfo from 'service/getUserHeartInfo';
import getUserStepInfo from 'service/getUserStepInfo';

import styles from './memberDetail.module.scss';

const MemberDetail = () => {
  const { memberID } = useParams();
  const setMemberInfo = useSetRecoilState(pickedMemberInfo);
  const setHearthData = useSetRecoilState(heartDataState);
  const setStepData = useSetRecoilState(stepDataState);
  const wholeHeartData = memberID ? getUserHeartInfo(+memberID) : undefined;
  const wholeStepData = memberID ? getUserStepInfo(+memberID) : undefined;

  const filteredInfo = memberID ? DUMMY_DATA.filter((member) => member.memSeq === +memberID)[0] : null;

  useEffect(() => {
    if (filteredInfo && wholeHeartData) {
      setMemberInfo(filteredInfo);
      setHearthData(wholeHeartData);
    }
    setStepData(wholeStepData);
  }, [filteredInfo, setHearthData, setMemberInfo, setStepData, wholeHeartData, wholeStepData]);

  return (
    <div className={styles.memberDetail}>
      <MemberInfo info={filteredInfo} />
      <h3>심박수</h3>
      <HeartChart />
      <h3>걸음수</h3>
      <ColumnChart />
    </div>
  );
};

export default MemberDetail;
