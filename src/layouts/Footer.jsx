import Box from '@/components/atom/Box';
import AuthContext from '@/context/AuthContext';
import { thisYear } from '@/utils/dateFormat';
import React, { useContext } from 'react';

function Footer() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <>
      <hr className={`${loggedIn ? 'border-gray-400/20' : ''}`} />
      <Box className="flex justify-center mt-10">
        <p className="text-sm text-gray-600">© {thisYear()} Conduit. All rights reserved.</p>
      </Box>
    </>
  );
}

export default Footer;
