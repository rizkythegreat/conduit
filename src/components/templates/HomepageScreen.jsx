import AuthContext from '@/context/AuthContext';
import AuthLayout from '@/layouts/AuthLayout';
import React, { useContext } from 'react';

function HomepageScreen() {
  const { user } = useContext(AuthContext);
  return (
    <AuthLayout>
      <h1 className="text-lg font-sohne">
        Hi {user?.displayName}, <br /> how are you?
      </h1>
      <div className="mt-8">
        {/* Konten utama profile */}
        <p>Your homepage content goes here...</p>
      </div>
    </AuthLayout>
  );
}

export default HomepageScreen;
