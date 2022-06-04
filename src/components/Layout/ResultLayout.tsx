import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ProfileIcon } from 'assets';
import styles from './resultLayout.module.scss';

const ResultLayout = () => {
  const adminID = 'moaadmin2'; // 로그인 된 아이디 받아와서 뿌려주기
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };

  const switchCase = {
    '/home': '홈',
    '/memberManagement': '회원 관리',
  }[pathname];

  const breadCrumbList = [
    { crumbName: '홈', path: '/home' },
    { crumbName: '회원 관리', path: `/memberManagement` },
  ];
  const managePath = pathname === '/memberManagement';
  return (
    <div className={styles.pageWrapper}>
      <header>
        <h1>백오피스</h1>
        <div className={styles.rightWing}>
          <ProfileIcon />
          <p>{adminID}</p>
          <button type='button' onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>
      <div className={styles.outletInner}>
        <div className={styles.outletWrapper}>
          <aside className={styles.sideNav}>
            <ul>
              {breadCrumbList.map((crumb) => (
                <li key={`crumb-${crumb.crumbName}`}>
                  <NavLink to={crumb.path} className={({ isActive }) => (isActive ? styles.isHere : styles.isNotHere)}>
                    {crumb.crumbName}
                  </NavLink>
                </li>
              ))}
            </ul>
          </aside>
          <div className={styles.rightBlock}>
            <ul className={styles.breadCrumbWrapper}>
              {pathname !== '/home' && (
                <>
                  {breadCrumbList.map((crumb) => (
                    <li key={`crumb-${crumb.crumbName}`}>
                      <NavLink to={crumb.path}>{crumb.crumbName}</NavLink>
                    </li>
                  ))}
                  {!managePath && <li>회원 정보</li>}
                </>
              )}
            </ul>
            <h3 className={styles.resultTitle}>{switchCase ?? '회원 정보'}</h3>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultLayout;
