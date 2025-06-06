import React from 'react';
import { X, GoogleLogoIcon, FacebookLogoIcon, MailboxIcon } from '@phosphor-icons/react';
import Box from '../atom/Box';

function DialogRegister({ animation, handleClose, handleClickSignIn }) {
  const signUpWith = [
    {
      name: 'Google',
      text: 'Sign up with Google',
      icon: GoogleLogoIcon
    },
    {
      name: 'Facebook',
      text: 'Sign up with Facebook',
      icon: FacebookLogoIcon
    },
    {
      name: 'Email',
      text: 'Sign up with Email',
      icon: MailboxIcon
    }
  ];
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
        <div
          className={`bg-white rounded-lg shadow-lg p-6 w-full max-w-sm sm:max-w-xl transform ${animation}`}>
          <h2 className="xl:text-3xl text-2xl flex items-center justify-center mb-4 mt-8">
            Join Conduit.
          </h2>
          {signUpWith?.map((item, index) => (
            <Box key={index} className="xl:max-w-sm max-w-xs flex flex-col mx-auto">
              <button className="py-2 transition-btn flex items-center text-white my-2 bg-slate-900 hover:bg-slate-700 rounded-full">
                <item.icon className="w-5 h-5 ml-3" weight="bold" />
                <p className="w-full font-thin">{item.text}</p>
              </button>
            </Box>
          ))}
          <Box className="flex items-center justify-center mt-4">
            <p>Already have an Account?</p>
            <button
              onClick={handleClickSignIn}
              className="ml-1 text-green-600 hover:text-green-900 transition-btn">
              Sign in
            </button>
          </Box>
          <button
            onClick={handleClose}
            className="absolute transition-btn right-5 top-6 rounded-full p-2 text-slate-700 hover:text-white hover:bg-gray-700">
            <X className="w-5 h-5" weight="bold" />
          </button>
        </div>
      </div>
    </>
  );
}

export default DialogRegister;
