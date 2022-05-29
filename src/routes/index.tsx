import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Page from '../pages/Page';

const RootRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Page />} />
      </Route>
    </Routes>
  );
};

export default RootRoute;
