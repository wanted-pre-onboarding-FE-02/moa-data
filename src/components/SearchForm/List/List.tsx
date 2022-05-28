import styles from './list.module.scss';

interface IDumDataSet {
  id: string;
  date: string;
  mem_seq: number;
}

interface ITableDataSet {
  tableData: [] | IDumDataSet[];
}

const List = ({ tableData }: ITableDataSet) => {
  const TABLE_TITLE = ['회원번호', '가입일', '로그인ID', '상세'];
  if (tableData && tableData.length === 0) {
    return <p>검색 결과가 없습니다. 검색 조건을 다시 설정해주세요.</p>;
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
            <tr key={data.id} className={styles.line}>
              <th>{data.mem_seq}</th>
              <td>{data.date}</td>
              <td>{data.id}</td>
              <td>
                <button type='button'>관리</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
