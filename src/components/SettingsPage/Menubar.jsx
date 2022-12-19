import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdPerson, MdNotifications, MdLogout } from "react-icons/md";
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase.config';

const Menubar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };
  
  return (
    // <div className='fixed h-full w-64'>
      <nav className='h-full w-full px-4 py-5'>
        <ul className='pt-28 flex flex-col gap-y-2'>
          <li>
            <Link to={'profile'} 
              className='flex items-center gap-x-2 p-2 bg-blue-600'
            >
              <MdPerson />
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link to={'notification'} 
              className='flex items-center gap-x-2 p-2 bg-blue-600'
            >
              <MdNotifications />
              <span>Notification</span>
            </Link>
          </li>
          <li>
            <button to={'profile'} onClick={handleLogout} 
              className='w-full flex items-center gap-x-2 p-2 bg-blue-600'
            >
              <MdLogout />
              <span>Sign out</span>
            </button>
          </li>
        </ul>
      </nav>
    // </div>
  );
};

export default Menubar;
