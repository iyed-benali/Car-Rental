import React from 'react'
import Image from 'next/image'
import Button from './button'

const Hero = () => {
  const handleScroll=()=>{
console.log('iyed')
  }
  return (
    <div className='hero' >
     <div className="flex-1 pt-36 padding-x">
      <h1 className='hero__title'>
        Find , book , or rent a car - quickly and easly 
      </h1>
      <p className='hero__subtitle'>
        streamline your car rental experience with effortless booking proccess 
      </p>
<Button 
title = 'explore Cars'
containerStyles = "mt-10 "
  handleClick = {handleScroll}
/>
     </div>
    </div>
  )
}

export default Hero
