import styles from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <form className={styles.form}>
      <h1>백오피스</h1>
      <input type='text' className={styles.id} placeholder='id' />
      <input type='password' className={styles.password} placeholder='password' />
      <button type='submit'>로그인</button>
    </form>
  );
};

export default LoginPage;
