import ResultLayout from 'components/Layout/ResultLayout';
import MemberDetail from 'pages/MemberDetail/MemberDetail';
import MemberManagement from 'pages/MemberManagement/MemberManagement';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import LoginPage from '../pages/LoginPage';

const RootRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<LoginPage />} />
      </Route>
      <Route path='' element={<ResultLayout />}>
        <Route path='memberManagement' element={<MemberManagement />} />
        <Route path='memberDetail/:memberID' element={<MemberDetail />} />
      </Route>
    </Routes>
  );
};

export default RootRoute;
