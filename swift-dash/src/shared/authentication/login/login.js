import React from 'react'

const Login = () => {
  return (
    <section className='bg-gradient-to-br min-h-screen from-secondary via-primary-800 to-secondary p-20'>
        <div className='flex bg-white rounded-3xl'>
            <div className='basis-2/5 px-20 py-16'>
                <img src='assets/images/nedolightLogo.ico' className='h-20'/>
                <h1 className='font-bold text-2xl text-gray-800 mt-5'>Hey, Hello</h1>
                <p className='text-lg text-gray-600 mt-2'>Enter the information you entered while registering.</p>
                <div>
                    <label className='block text-sm mt-3 font-semibold text-gray-800'>Username</label>
                    <input type='text' className='w-full p-2' placeholder='Please Enter Your Username'/>
                </div>
            </div>
            <div className='basis-3/5'>
                <div className='bg-primary_light p-14 pr-32'>
                    <img src='assets/images/nedodarkLogo.png'/>
                    <h1 className='text-6xl font-semibold text-gray-600 mt-4'>Well You Are <br/>Back!</h1>
                    <h1 className='text-6xl font-semibold mt-5'>Welcome Again</h1>
                    <p className='text-2xl font-semibold mt-11 text-gray-800'>You will never know everything.<br/>But you will know more...</p>
                </div>
            </div>
        </div>
       
    </section>
  )
}

export default Login


