import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
import { RecoilRoot } from 'recoil';
=======
>>>>>>> 70eecb0ec88de89b2e6704e2c70c3f0996b88b51
import reportWebVitals from './reportWebVitals';
import RootRoute from './routes';
import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <RecoilRoot>
      <BrowserRouter>
        <RootRoute />
      </BrowserRouter>
    </RecoilRoot>
=======
    <BrowserRouter>
      <RootRoute />
    </BrowserRouter>
>>>>>>> 70eecb0ec88de89b2e6704e2c70c3f0996b88b51
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
