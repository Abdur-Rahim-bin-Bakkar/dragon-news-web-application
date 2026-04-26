'use client'
import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    const handelerLogin = (e)=>{
        e.preventDefault()
        const password= e.target.password.value
        const email = e.target.email.value;
        
        console.log(password, 'password')
        console.log(email, 'email')
        // e.target.password.value = ''
        // e.target.email.value = ''
    }
    return (
        <div className='bg-stone-100 h-screen flex justify-center items-center'>
            <div className="card shadow bg-white p-10">
                <h1 className='text-center font-bold text-2xl border-b border-stone-300 pb-5'>Login your Account</h1>

                <form onSubmit={handelerLogin} action="" className='mt-5 space-y-5' >
                    <label className='font-bold ' >Email Address</label><br />
                    <input type="email" className='input bg-stone-100 mt-3 w-full' placeholder='Enter Your Email' name="email" id="" /><br />

                    <label className='font-bold ' >Password</label>
                    <input type="password" className='input bg-stone-100 mt-3 w-full' placeholder='Enter Your password' name="password" id="" />

                    <button type='submit' className='btn bg-[#403F3F] w-full text-white font-bold'>Login</button>
                </form>
                <p className='text-[#403F3F] text-center mt-3'>Dont’t Have An Account ? <Link href={'/register'} className=' text-[#F75B5F] font-bold cursor-pointer'>Register</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;