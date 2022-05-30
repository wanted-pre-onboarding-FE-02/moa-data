import ACCOUNTS from '../data/account.json';

export const authenticateUser = (id: string, password: string): { status: boolean; message: string } => {
  if (id.trim().length === 0 || password.trim().length === 0)
    return { status: false, message: '❌ Id or Password fields are blank' };

  if (!ACCOUNTS.some((account) => account.id === id && account.password === password)) {
    return {
      status: false,
      message: '❌ 아이디나 패스워드가 틀립니다',
    };
  }
  return {
    status: true,
    message: '⭕️ login succeeded',
  };
};
