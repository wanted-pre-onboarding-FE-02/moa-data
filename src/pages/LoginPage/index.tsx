import { FormEvent, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { authenticateUser } from '../../utils/authenticateUser';

import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { status, message } = authenticateUser(idRef.current!.value, passwordRef.current!.value);

    if (status) {
      navigate('/home');
      return;
    }
    toast(message);
  };

  return (
    <>
      <Toaster />
      <form className={styles.form} onSubmit={handleLogin}>
        <h1>백오피스</h1>
        <input type='text' placeholder='id' ref={idRef} />
        <input type='password' placeholder='password' ref={passwordRef} />
        <button type='submit'>로그인</button>
      </form>
    </>
  );
};

export default LoginPage;
