import React, { useEffect } from 'react';
import Button from './button';


const Hero = () => {
  const handleScroll = () => {
    console.log("clicked");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div className='hero'>
      <div className="flex-1 pt-36 padding-x">
        <h1 className='hero__title'>
          Find, book, or rent a car - quickly and easily
        </h1>
        <p className='hero__subtitle'>
          Streamline your car rental experience with an effortless booking process
        </p>
        <Button
          title='Explore Cars'
          containerStyles="bg-blue-500 text-white p-2 mt-4 rounded"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default Hero;
