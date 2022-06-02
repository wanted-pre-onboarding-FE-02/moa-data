import MemberInfo from 'components/MemberInfo/MemberInfo';
import ColumnChart from 'components/Step/ColumnChart';
import HeartChart from '../../components/HeartChar/HeartChart';

const MemberDetail = () => {
  return (
    <div>
      <MemberInfo />
      <HeartChart />
      <ColumnChart />
    </div>
  );
};

export default MemberDetail;
