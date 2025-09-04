import React from 'react'
import signupBg from '../../assets/images/loginBg.jpg'
import { useAuth } from '../../context/AuthContext';
import { useForm } from 'react-hook-form';
import { data, Link, useNavigate } from 'react-router';
import { signUpWithEmailPassword } from '../../firebase/auth';

const Signup = () => {
    const {login} = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm();
    const password = watch('password');
    const navigate = useNavigate();
    
    const signUp = async (data)=>{
        try {
            const {user, token} = await signUpWithEmailPassword(data);
            await login(user, token);
            navigate('/home');
        } catch (error) {
            console.log('Error signing up: ', error)
        }
    }
  return (
    <div className='w-screen h-screen overflow-y-hidden grid grid-cols-1 lg:grid-cols-[40%_1fr]'>
          {/* signup image */}
          <div className='hidden lg:block'>
            <img 
            src={signupBg} 
            alt="Match Set" 
            className='w-full h-screen object-cover object-[0%_50%]'
            />
          </div>
    
          {/* signup form */}
          <div className='p-10 lg:p-12 flex flex-col items-center gap-9 overflow-y-scroll'>
            <p className='font-frank-ruhl-libre text-3xl text-default'>Tomochá</p>
    
            {/* login form */}
            <form 
            className='font-dm-sans lg:w-[55%] h-full flex flex-col items-center justify-center text-default my-20'
            onSubmit={handleSubmit(signUp)}>
                <div className='w-full text-center'>
                    <h1 className='text-2xl lg:text-3xl font-medium'>Join Tomochá Today</h1>
                    <p className='lg:text-xl'>Create your account and connect with new friends.</p>
                </div>

                {/* first name and last name */}
                <div className='mt-8 w-full grid grid-cols-1 gap-3 '> 
                    {/* first name */}
                    <div className='w-full flex flex-col'>
                        <label 
                        htmlFor="fname"
                        className='font-medium'>
                            First Name
                        </label>
                        <input 
                        id='fname' 
                        type="text" 
                        className='border border-gray-200 rounded p-3 focus:outline-matcha-green'
                        placeholder='Enter your first name'
                        {...register('fname', {required:true})}/>
                        {errors.fname && <p className='error'>Please enter first name</p>}
                    </div>

                    {/* last name */}
                    <div className='w-full flex flex-col'>
                        <label 
                        htmlFor="lname"
                        className='font-medium'>
                            Last Name
                        </label>
                        <input 
                        id='lname' 
                        type="text" 
                        className='border border-gray-200 rounded p-3 focus:outline-matcha-green'
                        placeholder='Enter your last name'
                        {...register('lname', {required:true})}/>
                        {errors.lname && <p className='error'>Please enter last name</p>}
                    </div>

                    {/* username */}
                    <div className='w-full flex flex-col'>
                        <label 
                        htmlFor="username"
                        className='font-medium'>
                            Username
                        </label>
                        <input 
                        id='username' 
                        type="text" 
                        className='border border-gray-200 rounded p-3 focus:outline-matcha-green'
                        placeholder='Enter your username'
                        {...register('username', {required:true})}/>
                        {errors.username && <p className='error'>Please enter username</p>}
                    </div>
        
                    {/* email */}
                    <div className='w-full flex flex-col'>
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
                    <div className='w-full flex flex-col'>
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
                        {...register("password", {
                            required: 'Password is required',
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 
                                message: "Password must be minimum eight characters, at least one letter, one number and one special character:"}
                        })}/>
                        {errors.password && <p className='error'>{errors.password.message}</p>}
                    </div>

                    {/* confirm password */}
                    <div className='w-full flex flex-col'>
                        <label 
                        htmlFor="confirmPassword"
                        className='font-medium'>
                            Confirm Password
                        </label>
                        <input 
                        id='confirmPassword' 
                        type="password" 
                        className='border border-gray-200 rounded p-3 focus:outline-matcha-green'
                        placeholder='Confirm your password'
                        {...register("confirmPassword", 
                        {
                            required: true,
                            validate: value => value === password || "Passwords do not match"
                        })}/>
                        {errors.confirmPassword && <p className='error'>{errors.confirmPassword.message}</p>}
                    </div>
                </div>
    
                {/* submit btn */}
                <button 
                type='submit'
                className='p-3 bg-matcha-green w-full mt-5 rounded text-white transition duration-200 ease-in-out font-medium hover:bg-matcha-dark-green'>
                    Sign up
                </button>
    
                <p className='mt-10 text-sm text-center'>Already have an account?
                    <Link 
                    to='/'
                    className='font-semibold text-matcha-green link ms-1'>
                        Log in
                    </Link>
                </p>
            </form>
          </div>
        </div>
  )
}

export default Signup
