'use client'
import Link from 'next/link';
import React from 'react';
import user from '@/assets/user.png'
import Image from 'next/image';
import ActLink from './ActLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()
    // console.log(session.user.name)
    const links = <>
        <ActLink path={'/'}>Home</ActLink>
        <ActLink path={'/about'}>About</ActLink>
        <ActLink path={'/career'}>Career</ActLink>
    </>
    const handleLogout = async () => {
        await authClient.signOut();
    }
    return (
        <div>
            <div className="navbar mt-3  max-w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6 text-[#706F6F] text-lg">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <p>{isPending?  'loading...': session?.user?.name}</p>
                    <Image className='w-10' src={user} alt='user logo'></Image>
                    <Link href={'/login'} className="btn bg-[#403F3F] text-white font-bold">Login</Link>
                    <button onClick={handleLogout} className='btn'>logout</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;