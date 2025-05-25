import React, { useContext } from 'react';
import Box from '../atom/Box';
import AuthContext from '@/context/AuthContext';

function Hero() {
  const { handleOpenModalRegister } = useContext(AuthContext);
  return (
    <>
      <Box className="flex justify-end sm:mx-auto xl:h-[80vh] h-[60vh] mx-4">
        <Box className="w-8/13 flex flex-col xl:justify-center xl:mt-0 mt-20 justify-start">
          <Box className={'flex flex-col gap-y-3 mb-8'}>
            <h1 className="xl:text-8xl text-4xl">
              Human <br /> stories & ideas
            </h1>
            <p className="xl:text-2xl text-xl mt-4">
              A place to read, write, and deepen your understanding
            </p>
          </Box>
          <Box>
            <button
              onClick={() => handleOpenModalRegister()}
              className="px-8 py-2 xl:text-xl rounded-full hover:bg-gray-800 transition-btn bg-black text-white">
              Start reading
            </button>
          </Box>
        </Box>
        <Box className="flex justify-end mt-20">
          <img className="xl:max-h-[85%] max-h-[50%] w-auto" src="/medium-image.webp" alt="hero" />
        </Box>
      </Box>
    </>
  );
}

export default Hero;
