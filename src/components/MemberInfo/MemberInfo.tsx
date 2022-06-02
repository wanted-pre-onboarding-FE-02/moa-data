import IDumDataSet from 'components/SearchForm/searchData';
import styles from './memberInfo.module.scss';

interface IProps {
  info: IDumDataSet | null;
}

const MemberInfo = ({ info }: IProps) => {
  return (
    <div className={styles.infoWrapper}>
      {info && (
        <div className={styles.infoInner}>
          <div>
            <label htmlFor='memberId'>
              <span>로그인 ID</span>
              <input type='text' id='memberId' placeholder='전체' autoComplete='off' defaultValue={info.id} readOnly />
            </label>
            <div className={styles.codeBlock}>
              <label htmlFor='memberNum'>
                <span>회원 번호</span>
                <input
                  type='text'
                  id='memberNum'
                  placeholder='전체'
                  autoComplete='off'
                  defaultValue={info.memSeq}
                  readOnly
                />
              </label>
            </div>
          </div>
          <label htmlFor='memberDate'>
            <span>가입 일자</span>
            <input
              type='text'
              id='memberDate'
              placeholder='전체'
              autoComplete='off'
              defaultValue={info.date}
              readOnly
            />
          </label>
        </div>
      )}
      {!info && <p>멤버 정보가 없습니다</p>}
    </div>
  );
};

export default MemberInfo;
