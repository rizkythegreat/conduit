import React from 'react';
import Box from '../atom/Box';

function Hero() {
  return (
    <>
      <Box className="flex justify-end mx-auto h-[80vh]">
        <Box className="w-8/13 flex flex-col justify-center">
          <Box className={'flex flex-col gap-y-3 mb-8'}>
            <h1 className="text-8xl">
              Human <br /> stories & ideas
            </h1>
            <p className="text-2xl mt-4">A place to read, write, and deepen your understanding</p>
          </Box>
          <Box>
            <button className="px-8 py-2 text-xl rounded-full hover:cursor-pointer bg-black text-white">
              Start reading
            </button>
          </Box>
        </Box>
        <Box className="flex justify-end mt-20">
          <img className="max-h-[85%] w-auto" src="/medium-image.webp" alt="hero" />
        </Box>
      </Box>
    </>
  );
}

export default Hero;
