import React from 'react';

const RegisterPage = () => {
    return (
              <div className='bg-stone-100 h-screen flex justify-center items-center'>
            <div className="card shadow bg-white p-10">
                <h1 className='text-center font-bold text-2xl border-b border-stone-300 pb-5'>Register your Account</h1>

                <form action="" className='mt-5 space-y-5'>
                    <label  className='font-bold ' >Your Name</label><br />
                    <input type="text" className='input bg-stone-100 mt-3 w-full' placeholder='Enter Your Name' name="name" id="" /><br />

                
                    <label className='font-bold ' >Photo URL</label>
                    <input type="text" className='input bg-stone-100 mt-3 w-full' placeholder='Enter Your Photo URL' name="photo" id="" />

                    <label  className='font-bold ' >Email Address</label><br />
                    <input type="email" className='input bg-stone-100 mt-3 w-full' placeholder='Enter Your Email' name="email" id="" /><br />

                    <label className='font-bold ' >Email Address</label>
                    <input type="text" className='input bg-stone-100 mt-3 w-full' placeholder='Enter Your Password' name="password" id="" />

                    <button type='submit' className='btn bg-[#403F3F] w-full text-white font-bold'>Register</button>

                    
                </form>
               
            </div>
        </div>
    );
};

export default RegisterPage;