import IDumDataSet from '../searchData.d';
import styles from './list.module.scss';
import { IHeartData } from '../../../types';
// eslint-disable-next-line import/no-cycle
// import { Category } from '../SearchForm';
import TableRowItem from './TableRowItem';
import { TABLE_TITLE } from './ListConstant';

// interface ITableDataSet {
//   tableData: [] | IDumDataSet[];
//   setDatas: (datas: IHeartData[]) => void;
//   clickCategory: Category;
// }

interface IProps {
  tableData: [] | IDumDataSet[];
}

// const List = ({ tableData, setDatas, clickCategory }: ITableDataSet) => {

const List = ({ tableData }: IProps) => {
  // const heartData136 = [...firUserHeart1, ...firUserHeart2, ...firUserHeart3];
  // const heartData328 = [...secUserHeart1, ...secUserHeart2, ...secUserHeart3];
  // const heartData380 = [...thirUserHeart1, ...thirUserHeart2, ...thirUserHeart3];

  // const stepData = [];

  if (tableData && tableData.length === 0) {
    return <p>검색 결과가 없습니다. 검색 조건을 다시 설정해주세요.</p>;
  }
  // IHeartData | IStepData
  // const clickItem = (item: IDumDataSet) => {
  //   const sliceItem = item.date.split('-', 2)[1];
  //   const sliceItem2 = item.date.split('-', 3)[2].split(' ', 1)[0];
  //   const clickArr = {
  //     136: heartData136,
  //     328: heartData328,
  //     380: heartData380,
  //   }[item.mem_seq];
  //   const a =
  //     clickArr &&
  //     clickArr.filter((data) => {
  //       return data.member_seq === item.mem_seq && data.crt_ymdt.split('-', 2)[1] === sliceItem;
  //     });
  //   const b =
  //     clickArr &&
  //     clickArr.filter((data) => {
  //       return data.member_seq === item.mem_seq && data.crt_ymdt.split('-', 3)[2].split(' ', 1)[0] === sliceItem2;
  //     });
  //   console.log(sliceItem2.split(' ', 1)[0]);
  //   const resultData = {
  //     전체: a,
  //     오늘: b,
  //   }[clickCategory];
  //   if (!resultData) return;
  //   setDatas(resultData);
  //   console.log(clickArr);
  // };

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
            // <tr key={data.id} className={styles.line}>
            //   <th>{data.mem_seq}</th>
            //   <td>{data.date}</td>
            //   <td>{data.id}</td>
            //   <td>
            //     <button type='button' onClick={() => clickItem(data)}>
            //       관리
            //     </button>
            //   </td>
            // </tr>
            <TableRowItem rowData={data} key={`tableList-${data.id}`} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;