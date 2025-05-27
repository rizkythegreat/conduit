import React, { useContext } from 'react';
import Box from '@/components/atom/Box';
import AuthContext from '@/context/AuthContext';

function AuthLayout({ children, sidebarContent }) {
  const { loading } = useContext(AuthContext);
  return (
    <>
      <Box className="flex w-full mx-auto h-screen">
        {/* Main Content Area (75%) */}
        <Box className="w-3/4 mt-10">
          <Box className="max-w-xl mx-auto">{loading ? <div>Loading...</div> : children}</Box>
        </Box>

        {/* Sidebar (25%) */}
        <Box className="border-l border-l-gray-400/20 w-1/4">
          <Box className="mt-10 ml-4">{sidebarContent || <div>Default Sidebar Content</div>}</Box>
        </Box>
      </Box>
    </>
  );
}

export default AuthLayout;
