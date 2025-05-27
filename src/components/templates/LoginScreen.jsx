import Layout from '@/layouts/Layout';
import React from 'react';
import Hero from './Hero';
import DialogRegister from '../molecules/DialogRegister';
import DialogLogin from '../molecules/DialogLogin';

function LoginScreen({
  authAction,
  animation,
  handleCloseRegister,
  handleCloseLogin,
  handleClickSignUp,
  handleClickSignIn
}) {
  return (
    <>
      <Layout>
        <Hero />
        {authAction?.register && (
          <DialogRegister
            handleClickSignIn={handleClickSignIn}
            animation={animation?.register}
            handleClose={handleCloseRegister}
          />
        )}
        {authAction?.login && (
          <DialogLogin
            handleClickSignUp={handleClickSignUp}
            animation={animation?.login}
            handleClose={handleCloseLogin}
          />
        )}
      </Layout>
    </>
  );
}

export default LoginScreen;
