import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import LoginPage from '../pages/LoginPage';

const RootRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='login' element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default RootRoute;
