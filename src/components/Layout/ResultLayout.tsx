import { ProfileIcon } from 'assets';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './resultLayout.module.scss';

const ResultLayout = () => {
  const adminID = 'moaadmin2'; // 로그인 된 아이디 받아와서 뿌려주기
  return (
    <div className={styles.pageWrapper}>
      <header>
        <h1>백오피스</h1>
        <div className={styles.rightWing}>
          <ProfileIcon />
          <p>{adminID}</p>
          <button type='button'>Logout</button>
        </div>
      </header>
      <div className={styles.outletWrapper}>
        <p>홈 &gt; 회원관리 &gt; 회원 정보</p>
        <h3>회원 관리</h3>
        <Outlet />
      </div>
    </div>
  );
};

export default ResultLayout;
