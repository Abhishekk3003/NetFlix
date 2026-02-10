import React, { useRef, useState } from 'react'
import Header from './Header'
import { IMG_BACKGROUND } from '../utilis/constants'
import { checkValidData } from '../utilis/validate'

const Login = () => {

 const [isSignInForm, setIsSignInForm] = useState(true);
 const [errorMessage, setErrorMessage] = useState(null);

 const email = useRef(null);
 const password = useRef(null);

 const handleButtonClick = () => {
  // validate the form data here
  const message = checkValidData(email.current.value,password.current.value);
  setErrorMessage(message);
 }

  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src={IMG_BACKGROUND} alt="Netflix Background " />
      </div>
      <form 
      onSubmit={(e) => e.preventDefault()}
      className='absolute p-12 bg-black bg-opacity-80 w-3/12 my-36 mx-auto right-0 left-0 text-white'> 

      <h1 
      className='font-bold text-3xl cursor-pointer'
      >{isSignInForm ? "Sign IN" : "Sign UP"}
      </h1>

       {!isSignInForm &&<input type='text'
        placeholder='User Name' 
        className='p-4 my-4 w-full bg-gray-600'/>}

        <input 
        ref={email}
        type='text' 
        placeholder='email' 
        className='p-4 my-4 w-full bg-gray-600' />
       
        <input 
        ref={password}
        type='password' 
        placeholder='Password' 
        className='p-4 my-4 w-full bg-gray-600'/>

        <p className='text-red-500 font-bold'>{errorMessage}</p>

        <button
         className='bg-red-700  p-4 my-4 w-full rounded-lg'
         onClick={handleButtonClick} 
         >{isSignInForm ? "Sign IN" : "Sign UP"}
         </button>
        <p className='my-4 cursor-pointer' 
        onClick={toggleSignInForm} >
        {isSignInForm ? "New To Netflix? Sign Up Now" : "Already have an account? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login