import React from 'react';
import Box from '../atom/Box';
import AuthLayout from '@/layouts/AuthLayout';

function ProfileScreen() {
  return (
    <>
      <AuthLayout>
        <h1 className="text-4xl font-sohne">Profile</h1>
        <div className="mt-8">
          {/* Konten utama profile */}
          <p>Your profile content goes here...</p>
        </div>
      </AuthLayout>
    </>
  );
}

export default ProfileScreen;
