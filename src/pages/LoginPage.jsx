import Layout from '../layouts/Layout';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import Hero from '@/components/templates/Hero';
import DialogLogin from '@/components/molecules/DialogRegister';

function LoginPage() {
  const { authAction, setAuthAction, animation, setAnimation } = useContext(AuthContext);

  const handleClose = () => {
    setAnimation('animate-fadeOut');
    setTimeout(() => {
      setAuthAction(false);
      setAnimation('');
    }, 300);
  };

  useEffect(() => {}, [authAction]);
  return (
    <Layout>
      <Hero />
      {authAction && <DialogLogin animation={animation} handleClose={handleClose} />}
    </Layout>
  );
}

export default LoginPage;
