import styles from './list.module.scss';

interface IData {
  number: number;
  signUpDate: string;
  status: string;
  ID: string;
  nickname: string;
  birth: number;
  gender: string;
  managerID: string;
}

const List = () => {
  const TABLE_TITLE = ['회원번호', '가입일', '회원상태', '로그인ID', '별명', '생년', '성별', '매니저ID', '상세'];
  const tableData: IData[] | undefined = [
    {
      number: 1,
      signUpDate: '2021-04-01',
      status: '정상회원',
      ID: 'abc1234',
      nickname: '카리나',
      birth: 1973,
      gender: '남',
      managerID: '-',
    },
    {
      number: 2,
      signUpDate: '2021-04-02',
      status: '정상회원',
      ID: 'abc12345',
      nickname: '윈터',
      birth: 1973,
      gender: '남',
      managerID: '-',
    },
    {
      number: 3,
      signUpDate: '2021-04-01',
      status: '정상회원',
      ID: 'abc123456',
      nickname: '지젤',
      birth: 1973,
      gender: '남',
      managerID: '-',
    },
    {
      number: 4,
      signUpDate: '2021-04-01',
      status: '정상회원',
      ID: 'abc1234567',
      nickname: '닝닝',
      birth: 1973,
      gender: '남',
      managerID: '-',
    },
  ];
  if (tableData.length === 0) {
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
          {tableData.map((data) => (
            <tr key={data.ID} className={styles.line}>
              <th>{data.number}</th>
              <td>{data.signUpDate}</td>
              <td>{data.status}</td>
              <td>{data.ID}</td>
              <td>{data.nickname}</td>
              <td>{data.birth}년</td>
              <td>{data.gender}</td>
              <td>{data.managerID}</td>
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
