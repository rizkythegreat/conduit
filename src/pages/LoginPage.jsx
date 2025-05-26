import Layout from '../layouts/Layout';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import Hero from '@/components/templates/Hero';
import DialogRegister from '@/components/molecules/DialogRegister';
import DialogLogin from '@/components/molecules/DialogLogin';

function LoginPage() {
  const { authAction, setAuthAction, animation, setAnimation } = useContext(AuthContext);

  const handleCloseRegister = () => {
    setAnimation((prev) => ({ ...prev, register: 'animate-fadeOut' }));
    setTimeout(() => {
      setAuthAction((prev) => ({ ...prev, register: false }));
      setAnimation('');
    }, 300);
  };
  const handleCloseLogin = () => {
    setAnimation((prev) => ({ ...prev, login: 'animate-fadeOut' }));
    setTimeout(() => {
      setAuthAction((prev) => ({ ...prev, login: false }));
      setAnimation('');
    }, 300);
  };

  useEffect(() => {}, [authAction]);
  return (
    <Layout>
      <Hero />
      {authAction?.register && (
        <DialogRegister animation={animation?.register} handleClose={handleCloseRegister} />
      )}
      {authAction?.login && (
        <DialogLogin animation={animation?.login} handleClose={handleCloseLogin} />
      )}
    </Layout>
  );
}

export default LoginPage;
