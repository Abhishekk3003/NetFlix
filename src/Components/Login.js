import React, { useState } from 'react'
import Header from './Header'
import { IMG_BACKGROUND } from '../utilis/constants'

const Login = () => {

 const [isSignInForm, setIsSignInForm] = useState(true)



  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm)

  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src={IMG_BACKGROUND} alt="Netflix Background " />
      </div>
      <form className='absolute p-12 bg-black bg-opacity-80 w-3/12 my-36 mx-auto right-0 left-0 text-white'> 
      <h1 className='font-bold text-3xl cursor-pointer'>{isSignInForm ? "Sign IN" : "Sign UP"}</h1>
       {!isSignInForm &&<input type='text' placeholder='User Name' className='p-4 my-4 w-full bg-gray-600'/>}
        <input type='text' placeholder='Email or phone number' className='p-4 my-4 w-full bg-gray-600' />
       
        <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-600'/>
        <button className='bg-red-700  p-4 my-4 w-full rounded-lg'>{isSignInForm ? "Sign IN" : "Sign UP"}</button>
        <p className='my-4 cursor-pointer' onClick={toggleSignInForm} >
          {isSignInForm ? "New To Netflix? Sign Up Now" : "Already have an account? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login