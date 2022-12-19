import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const User = () => {
  return (
    <div className='relative h-screen w-screen'>
      <div className='fixed h-full w-16 bg-red-300'>
        <Navbar />
      </div>
      <div className='h-full w-full pl-16 bg-blue-300'>
        <Outlet />
      </div>
    </div>
  );
};

export default User;
