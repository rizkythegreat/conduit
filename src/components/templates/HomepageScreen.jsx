import AuthLayout from '@/layouts/AuthLayout';
import React from 'react';

function HomepageScreen() {
  return (
    <AuthLayout>
      <h1 className="text-4xl font-sohne">Welcome...</h1>
      <div className="mt-8">
        {/* Konten utama profile */}
        <p>Your homepage content goes here...</p>
      </div>
    </AuthLayout>
  );
}

export default HomepageScreen;
