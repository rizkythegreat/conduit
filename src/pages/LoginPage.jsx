import { useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import LoginScreen from '@/components/templates/LoginScreen';
import { Navigate } from 'react-router-dom';

function LoginPage() {
  const {
    authAction,
    setAuthAction,
    animation,
    setAnimation,
    handleOpenModalRegister,
    handleOpenModalLogin
  } = useContext(AuthContext);

  const handleCloseRegister = () => {
    setAnimation((prev) => ({ ...prev, register: 'animate-fadeOut' }));
    setTimeout(() => {
      setAuthAction((prev) => ({ ...prev, register: false }));
      setAnimation((prev) => ({ ...prev, register: '' }));
    }, 300);
  };
  const handleCloseLogin = () => {
    setAnimation((prev) => ({ ...prev, login: 'animate-fadeOut' }));
    setTimeout(() => {
      setAuthAction((prev) => ({ ...prev, login: false }));
      setAnimation((prev) => ({ ...prev, login: '' }));
    }, 300);
  };

  const handleClickSignUp = () => {
    setAuthAction((prev) => ({ ...prev, login: false }));
    setAnimation((prev) => ({ ...prev, login: '' }));
    handleOpenModalRegister();
  };

  const handleClickSignIn = () => {
    setAuthAction((prev) => ({ ...prev, register: false }));
    setAnimation((prev) => ({ ...prev, register: '' }));
    handleOpenModalLogin();
  };

  if (localStorage.getItem('token')) {
    return <Navigate to="/homepage" />;
  }

  useEffect(() => {}, [authAction]);
  return (
    <LoginScreen
      animation={animation}
      authAction={authAction}
      handleClickSignUp={handleClickSignUp}
      handleClickSignIn={handleClickSignIn}
      handleCloseRegister={handleCloseRegister}
      handleCloseLogin={handleCloseLogin}
    />
  );
}

export default LoginPage;
