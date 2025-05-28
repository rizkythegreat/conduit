import AuthLayout from '@/layouts/AuthLayout';
import React from 'react';

function SettingScreen() {
  return (
    <>
      <AuthLayout>
        <h1 className="text-4xl font-sohne">Settings</h1>
        <div className="mt-8">
          {/* Konten utama profile */}
          <p>Your settings content goes here...</p>
        </div>
      </AuthLayout>
    </>
  );
}

export default SettingScreen;
