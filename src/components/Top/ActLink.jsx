"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const ActLink = ({children,path}) => {
    const CurrentPath = usePathname()
    return <Link className={`${path === CurrentPath && 'border-b pb-1 border-success text-success text-lg duration-700'}`} href={path}>{children}</Link>
};

export default ActLink;