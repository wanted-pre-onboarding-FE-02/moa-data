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
        <Outlet />
      </div>
    </div>
  );
};

export default ResultLayout;
