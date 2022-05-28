import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.app}>
      <Outlet />
    </div>
  );
};

export default Layout;
