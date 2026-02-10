import React from 'react'
import { IMG_LOGO } from '../utilis/constants'

const Header = () => {
  return (
    <div className='absolute z-10'>
      <img className='w-44 ' src={IMG_LOGO} alt="Netflix Logo" />
    </div>
  )
}

export default Header