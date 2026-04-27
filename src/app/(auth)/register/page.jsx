'use client'
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const handelerLogin =async (data) => {
        const name = data.name;
        const photo = data.photo;
        const email = data.email;
        const password = data.password;
        console.log(name, photo, email, password)
        const { data:serverDAta, error } = await authClient.signUp.email({
            name: name, // required
            email:email, // required
            password: password, // required
            image: photo,
        });
        console.log(serverDAta,'data')
        console.log(error,'error')
        if(data){
            redirect('/')
        }
    }
    // console.log(errors)
    return (
        <div className='bg-stone-100 h-screen flex justify-center items-center'>
            <div className="card shadow bg-white p-10">
                <h1 className='text-center font-bold text-2xl border-b border-stone-300 pb-5'>Register your Account</h1>

                <form onSubmit={handleSubmit(handelerLogin)} action="" className='mt-5 space-y-5'>
                    <label className='font-bold ' >Your Name</label><br />
                    <input type="text" className='input bg-stone-100 mt-3 w-full' placeholder='Enter Your Name'
                        {...register('name')}
                        id="" /><br />


                    <label className='font-bold ' >Photo URL</label>
                    <input type="text" className='input bg-stone-100 mt-3 w-full' placeholder='Enter Your Photo URL'
                        {...register('photo')}
                        id="" />

                    <label className='font-bold ' >Email Address</label><br />
                    <input type="email" className='input bg-stone-100 mt-3 w-full' placeholder='Enter Your Email'
                        {...register('email')}
                        id="" /><br />

                    <label className='font-bold ' >Email Address</label>
                    <input type="text" className='input bg-stone-100 mt-3 w-full' placeholder='Enter Your Password'
                        {...register('password')}
                        id="" />

                    <button type='submit' className='btn bg-[#403F3F] w-full text-white font-bold'>Register</button>


                </form>

            </div>
        </div>
    );
};

export default RegisterPage;