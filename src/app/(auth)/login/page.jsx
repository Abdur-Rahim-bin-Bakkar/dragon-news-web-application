'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const handelerLogin = async(data) => {
        const email = data.email;
        const password = data.password;
        console.log(password, email)
        const { data:LoginData, error } = await authClient.signIn.email({
            email:email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        if (LoginData) {
            redirect('/')
        }
    }
    console.log(errors)
    return (
        <div className='bg-stone-100 h-screen flex justify-center items-center'>
            <div className="card shadow bg-white p-10">
                <h1 className='text-center font-bold text-2xl border-b border-stone-300 pb-5'>Login your Account</h1>

                <form onSubmit={handleSubmit(handelerLogin)} action="" className='mt-5 space-y-5' >
                    <label className='font-bold ' >Email Address</label><br />
                    <input type="email" className='input bg-stone-100 mt-3 w-full' placeholder='Enter Your Email'
                        {...register('email')}
                        id="" /><br />

                    <label className='font-bold ' >Password</label>
                    <input type="password" className='input bg-stone-100 mt-3 w-full' placeholder='Enter Your password'
                        {...register('password', { required: 'enter a valid password' })}
                        id="" />
                    {
                        errors?.password &&
                        <p className='text-red-500'>{errors?.password?.message}</p>
                    }
                    <button type='submit' className='btn bg-[#403F3F] w-full text-white font-bold'>Login</button>
                </form>
                <p className='text-[#403F3F] text-center mt-3'>Dont’t Have An Account ? <Link href={'/register'} className=' text-[#F75B5F] font-bold cursor-pointer'>Register</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;