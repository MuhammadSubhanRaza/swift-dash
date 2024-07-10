import React from 'react'

const Login = () => {
  return (
    <section>
        <div className='flex'>
            <div className='basis-1/2 min-h-screen bg-primary-950 hidden lg:block'  >
                <div className='h-full' style={{background:'url(assets/images/line.webp)'}}>
                    <div className=''>
                        <h1 className='text-6xl font-semibold text-white mt-4'>Welcome Back</h1>
                        <h1 className='text-4xl font-semibold text-gray-200 mt-4'>Nice to see you again</h1>
                    </div>
                </div>
            </div>
            <div className='lg:basis-1/2 flex-1 xl:px-56 px-11 py-16 min-h-screen flex justify-center items-center'>
                <div className='w-full'>
                    <img src='assets/images/nedolightLogo.ico' className='h-20'/>
                    <h1 className='font-semibold text-3xl text-gray-800 mt-5'>Sign In</h1>
                    <p className='text-lg text-gray-600 mt-2'>Please enter your details to sign in</p>
                    <div>
                        <label className='block text-sm mt-3 font-semibold text-gray-800'>Username</label>
                        <input type='text' className='form-control mt-2' placeholder='Please Enter Your Username'/>
                    </div>
                    <div>
                        <label className='block text-sm mt-3 font-semibold text-gray-800'>Password</label>
                        <input type='password' className='form-control mt-2' placeholder='Please Enter Your Password'/>
                    </div>
                    <div className='flex mt-4'>
                        <div className='basis-1/2'>
                            <div className="flex items-center mb-4">
                                <input id='rememberMe' type='checkbox' className='accent-primary-950 w-4 h-4'/>
                                <label for='rememberMe' className='ml-2 text-sm'>Remeber Me</label>
                            </div>
                        </div>
                        <div className='basis-1/2 text-right'>
                            <a className='text-primary-950' href='#'>
                                Forget Password
                            </a>
                        </div>
                    </div>
                    <button className='outline-none border-none bg-primary-950 w-full text-white p-2 text-lg font-semibold rounded-md mt-5'>
                        Sign In
                    </button>
                </div>
            </div>
        </div>
       
    </section>
  )
}

export default Login


{/* <div className='bg-primary_light p-14 pr-32'>
                    <img src='assets/images/nedodarkLogo.png'/>
                    <h1 className='text-6xl font-semibold text-gray-600 mt-4'>Well You Are <br/>Back!</h1>
                    <h1 className='text-6xl font-semibold mt-5'>Welcome Again</h1>
                    <p className='text-2xl font-semibold mt-11 text-gray-800'>You will never know everything.<br/>But you will know more...</p>
                </div> */}