import AuthLayout from '@/layouts/AuthLayout';
import React from 'react';

function NewArticleScreen() {
  return (
    <>
      <AuthLayout>
        <h1 className="text-4xl font-sohne">New Article</h1>
        <div className="mt-8">
          {/* Konten utama profile */}
          <p>Your new article content goes here...</p>
        </div>
      </AuthLayout>
    </>
  );
}

export default NewArticleScreen;
