'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

export const Header: React.FC = () => {
    const router = useRouter();

    const handleClick = () => {
    // Navigasi ke homepage menggunakan router.push() di client-side
    router.push('/');
  };
  return (
    <header className="bg-gray-100 p-4 flex justify-center font-bold items-center fixed top-0 left-0 w-full">
        <h1 onClick={handleClick} className='cursor-pointer'>punyaulhaq.com</h1>
    </header>
  );
};

export default Header;
