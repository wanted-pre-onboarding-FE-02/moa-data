import { useSetRecoilState } from 'recoil';
import { pickedMemberInfo } from '../../../recoil/member.atom';
import IDumDataSet from '../searchData.d';

interface IRowDataSet {
  rowData: IDumDataSet;
}

const TableRowItem = ({ rowData }: IRowDataSet) => {
  const { id, memSeq, date } = rowData;

  const setMemberInfo = useSetRecoilState(pickedMemberInfo);

  const handleSetBtnClick = () => {
    setMemberInfo(rowData);
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
