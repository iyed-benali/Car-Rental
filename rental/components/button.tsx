import React from 'react'
import Image from 'next/image'
import { ButtonProps } from '@/types/idnex'

const Button = ({title,containerStyles,handleClick}:ButtonProps) => {
  return (
   
      <button disabled={false}

      type='button'
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
      > title 
      <span className={``}>

      </span>
      </button>
    
  )
}

export default Button
