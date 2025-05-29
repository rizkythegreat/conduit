import AuthLayout from '@/layouts/AuthLayout';
import React from 'react';
import Box from '../atom/Box';

function NewArticleScreen() {
  return (
    <>
      <AuthLayout>
        <h1 className="text-4xl font-sohne">New Article</h1>
        <div className="mt-8">
          {/* Konten utama profile */}
          <Box>
            <input
              type="text"
              placeholder="Title"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />
            <input
              type="text"
              placeholder="Description"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />
            <textarea
              type="text"
              rows="4"
              placeholder="Body"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />
            <input
              type="text"
              placeholder="Tags"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />
            <input
              type="file"
              placeholder="Image"
              accept="image/*"
              onChange={(e) => console.log(e.target.files[0])}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 file:mr-4 file:bg-blue-500 file:text-white file:px-3 file:py-1 file:rounded-full file:hover:bg-blue-600 file:transition-btn file:cursor-pointer"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-btn">
              Publish Article
            </button>
          </Box>
        </div>
      </AuthLayout>
    </>
  );
}

export default NewArticleScreen;
