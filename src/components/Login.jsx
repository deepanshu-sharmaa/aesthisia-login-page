import React, {useState} from "react";
import photo from '../assets/photo.png';
import petals from '../assets/petals 1.png';

export default function Login() {

    return (
        
      <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
          <div className='p-8 hidden sm:block'>
              <img className='w-full h-full object-fill rounded-2xl ' src={photo} alt="" />
          </div>
  
          <div className='flex flex-col justify-center p-10'>
              <div className="">
                <img className='mx-auto object-scale-down h-12 w-50' src={petals} alt="petals-logo" />
                <p className='text-center text-[35px] font-medium'>Welcome <span className="text-teal-600">Back!</span></p>
                <p className=' text-center text-gray-500'>Glad to see you, Again!</p>
              </div>

              <form className='max-w-[800px] gap-y-6 w-full mx-auto rounded-lg p-8 px-20'>
                      <input className='p-4 min-w-[500px] focus:border-gray border-2 border-solid focus:outline-none bg-white rounded-lg' type="email" placeholder="Enter your email" />
                      <br />
                      <br />
                      
                      <input className='p-4  min-w-[500px] focus:border-gray border-2 border-solid focus:outline-none bg-white rounded-lg' type="password" placeholder="Enter your password" />

                  <div className='flex justify-end pr-10 text-gray-400 py-2' >
                      <a href=""><p>Forgot Password?</p></a>
                  </div>
                  <button className='min-w-[500px] h-14 my-5 py-2 bg-black shadow-lg shadow-gray-500/50 hover:shadow-gray-500/40 text-white font-semibold rounded-lg'>Log In</button>
              </form>

              <br />
              <br />

              <p className='text-gray-600 text-center'>Don't have an account yet? <a href="" className='font-medium text-teal-600'>Sign In</a></p>
          </div>
      </div>
    )
  }