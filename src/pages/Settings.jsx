import React from 'react';
import { Outlet } from 'react-router-dom';
import Menubar from '../components/SettingsPage/Menubar';

const Settings = () => {
  return (
    // <div className='h-full w-full pl-16'>
      <div className='relative h-full w-full'>
        <div className='fixed h-full w-64 bg-yellow-300'>
          <Menubar />
        </div>
        <div className='h-full w-full pl-64 bg-green-400'>
          <Outlet />
        </div>
      </div>
    // </div>
  );
};

export default Settings;
