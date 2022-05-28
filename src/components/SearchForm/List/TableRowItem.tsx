import { useSetRecoilState } from 'recoil';

import { pickedMemberInfo } from '../../../recoil/member.atom';
import getUserHeartInfo from '../../../service/getUserHeartInfo';
import getUserStepInfo from '../../../service/getUserStepInfo';
import IDumDataSet from '../searchData.d';

interface IRowDataSet {
  rowData: IDumDataSet;
}

const TableRowItem = ({ rowData }: IRowDataSet) => {
  const { id, memSeq, date } = rowData;
  // const wholeHeartData = getUserHeartInfo(memSeq);
  // const wholeStepData = getUserHeartInfo(memSeq);
  // 리코일로 속성 버튼 클릭할때 세팅해주면 될듯..?

  const setMemberInfo = useSetRecoilState(pickedMemberInfo);

  const handleSetBtnClick = () => {
    const wholeHeartData = getUserHeartInfo(memSeq);
    const wholeStepData = getUserStepInfo(memSeq);
    setMemberInfo(rowData);
    console.log(wholeHeartData, wholeStepData);
  };

  return (
    <tr>
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
