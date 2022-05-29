import { FormEvent, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { authenticateUser } from '../../utils/authenticateUser';

import styles from './LoginPage.module.scss';

// id: moaadmin1
// password: moaadmin1

const LoginPage = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { status, message } = authenticateUser(idRef.current!.value, passwordRef.current!.value);
    console.log(status, message);
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
