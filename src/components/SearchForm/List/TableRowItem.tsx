import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { heartDataState, pickedMemberInfo } from '../../../recoil/member.atom';
import getUserHeartInfo from '../../../service/getUserHeartInfo';
// import getUserStepInfo from '../../../service/getUserStepInfo';
import IDumDataSet from '../searchData.d';

import styles from './list.module.scss';

interface IRowDataSet {
  rowData: IDumDataSet;
}

const TableRowItem = ({ rowData }: IRowDataSet) => {
  const { id, memSeq, date } = rowData;
  const setHearthData = useSetRecoilState(heartDataState);
  const navigate = useNavigate();

  // const wholeHeartData = getUserHeartInfo(memSeq);
  // const wholeStepData = getUserHeartInfo(memSeq);
  // 리코일로 속성 버튼 클릭할때 세팅해주면 될듯..?

  const setMemberInfo = useSetRecoilState(pickedMemberInfo);

  const handleSetBtnClick = () => {
    const wholeHeartData = getUserHeartInfo(memSeq);
    // const wholeStepData = getUserStepInfo(memSeq);
    setMemberInfo(rowData);
    setHearthData(wholeHeartData);
    // console.log(wholeHeartData, wholeStepData);
    navigate(`/memberDetail/${memSeq}`);
  };

  return (
    <tr className={styles.tableRow}>
      <th>{memSeq}</th>
      <td>{date}</td>
      <td>{id}</td>
      <td>
        <button type='button' onClick={handleSetBtnClick}>
          관리
        </button>
      </td>
    </tr>
  );
};

export default TableRowItem;
