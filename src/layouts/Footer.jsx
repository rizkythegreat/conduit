import Box from '@/components/atom/Box';
import { thisYear } from '@/utils/dateFormat';
import React from 'react';

function Footer() {
  return (
    <>
      <hr />
      <Box className="flex justify-center mt-10">
        <p className="text-sm text-gray-600">© {thisYear()} Conduit. All rights reserved.</p>
      </Box>
    </>
  );
}

export default Footer;
