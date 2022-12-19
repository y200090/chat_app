import React from 'react';
import { Outlet } from 'react-router-dom';
import Channels from '../components/ChatsPage/Channels';

const Chats = () => {
  return (
    // <div className='h-full w-full pl-16'>
      <div className='relative h-full w-full'>
        <div className='fixed h-full w-64 bg-blue-700'>
          <Channels />
        </div>
        <div className='h-full w-full pl-64 bg-red-700'>
          {/* <Outlet /> */}
        </div>
      </div>
    // </div>
  );
};

export default Chats;
