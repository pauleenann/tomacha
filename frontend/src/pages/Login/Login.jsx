import React from 'react'
import loginBg from '../../assets/images/loginBg.jpg'
import { authIcons } from '../../utils/constants'
import { useForm } from "react-hook-form"
import { signInWithGoogle } from '../../firebase/auth'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router'

const Login = () => {
    const {login} = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const handleIconClick = async (name)=>{
        switch(name){
            case 'google':
                try {
                    const { user, token } = await signInWithGoogle();
                    await login(user, token);
                    navigate('/')
                } catch (err) {
                    console.error("Google sign-in failed:", err);
                }
                break;
            default: 
                console.log('Invalid. Please try again')
        }
    }
    
  return (
    <div className='w-screen h-screen overflow-y-hidden grid grid-cols-1 lg:grid-cols-[40%_1fr]'>
      {/* login image */}
      <div className='hidden lg:block'>
        <img 
        src={loginBg} 
        alt="Match Set" 
        className='w-full h-screen object-cover object-[0%_50%]'
        />
      </div>

      {/* login form */}
      <div className='p-10 lg:p-12 flex flex-col items-center gap-9'>
        <p className='font-frank-ruhl-libre text-3xl text-default'>Tomochá</p>

        {/* login form */}
        <form 
        onSubmit={handleSubmit((data)=>console.log(data))}
        className='font-dm-sans lg:w-[55%] h-full flex flex-col items-center justify-center text-default'>
            <div className='w-full text-center'>
                <h1 className='text-2xl lg:text-3xl font-medium'>Welcome back to Tomochá</h1>
                <p className='lg:text-xl'>Connect, share, and sip with fellow matcha lovers.</p>
            </div>

            {/* email */}
            <div className='mt-6 lg:mt-10 w-full flex flex-col'>
                <label 
                htmlFor="email"
                className='font-medium'>
                    Email
                </label>
                <input 
                id='email' 
                type="text" 
                className='border border-gray-200 rounded p-3 focus:outline-matcha-green'
                placeholder='Enter your email'
                {...register('email', {required:true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                })}/>
                {errors.email && <p className='error'>Please enter a valid email</p>}
            </div>

            {/* password */}
            <div className='mt-3 w-full flex flex-col'>
                <label 
                htmlFor="password"
                className='font-medium'>
                    Password
                </label>
                <input 
                id='password' 
                type="password" 
                className='border border-gray-200 rounded p-3 focus:outline-matcha-green'
                placeholder='Enter your password'
                {...register("password", {required: true})}/>
                {errors.password && <p className='error'>Please enter your password</p>}
            </div>

            {/* forgot password */}
            <div className='mt-3 w-full text-end text-sm font-semibold link'>
                Forgot password?
            </div>

            {/* submit btn */}
            <button 
            type='submit'
            className='p-3 bg-matcha-green w-full mt-5 rounded text-white transition duration-200 ease-in-out font-medium hover:bg-matcha-dark-green'>
                Login
            </button>

            {/* continue with */}
            <div className='w-full grid grid-cols-[1fr_40%_1fr] lg:grid-cols-3 items-center gap-3 mt-8'>
                <hr className='text-gray-200'/>
                <span className='text-center font-medium'>or continue with</span>
                <hr className='text-gray-200'/>
            </div>

            {/* auth icons */}
            <div className='w-full flex items-center justify-center mt-5 gap-7'>
                {authIcons.map((item,index)=>(
                    <button
                    type='button'
                    onClick={()=>handleIconClick(item.name)}
                    className='bg-default text-white h-12 w-12 rounded-full transition duration-200 ease-in-out font-medium hover:bg-black'
                    key={index}>
                        <i className={item.icon}></i>
                    </button>
                ))}
            </div>

            <p className='mt-10 text-sm'>New here? <span className='font-semibold text-matcha-green link'>Join Tomochá</span></p>
        </form>
      </div>
    </div>
  )
}

export default Login
