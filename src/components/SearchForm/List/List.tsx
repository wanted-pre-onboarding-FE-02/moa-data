import IDumDataSet from '../searchData.d';
import styles from './list.module.scss';
import TableRowItem from './TableRowItem';
import { TABLE_TITLE } from './ListConstant';

interface IProps {
  tableData: [] | IDumDataSet[];
}

const List = ({ tableData }: IProps) => {
  if (tableData && tableData.length === 0) {
    return <p className={styles.noResult}>검색 결과가 없습니다. 검색 조건을 다시 설정해주세요.</p>;
  }

  return (
    <div className={styles.searchResult}>
      <p>
        전체 총 <mark>{tableData.length}</mark>명의 회원이 검색되었습니다.
      </p>
      <table className={styles.table}>
        <thead>
          <tr className={styles.line}>
            {TABLE_TITLE.map((title) => (
              <td key={title}>{title}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((data: IDumDataSet) => (
            <TableRowItem rowData={data} key={`tableList-${data.id}`} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
