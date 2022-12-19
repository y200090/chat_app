import React from 'react';
import ReactLogo from '../assets/react.svg';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { MdHome, MdDashboard, MdChat, MdSettings, MdLightMode, MdModeNight } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
      
    } catch (err) {
      alert(err.message);
    }
  };
  
  return (
    // <div className='h-screen w-screen'>
      // <div className='fixed h-full w-16'>
        <nav className='h-full w-full px-3 py-4'>
          <ul className='relative pt-28 flex flex-col items-center gap-y-6'>
            <li className='absolute top-0 h-12 w-12'>
              <Link to={'/'} 
                className='h-full w-full'
              >
                <img src={ReactLogo} alt="App Logo" className='h-full w-full' />
              </Link>
            </li>
            <li className='h-10 w-10'>
              <Link to={'/'} 
                className='h-full w-full flex flex-col items-center justify-center gap-y-1 px-2 pt-1.5 pb-0.5 bg-slate-400 rounded-xl'
              >
                <MdHome className='h-full w-full'/>
                <span className='block h-1 w-1/2 bg-amber-600 rounded-full'></span>
              </Link>
            </li>
            <li className='h-10 w-10'>
              <Link to={'dashboard'} 
                className='h-full w-full flex flex-col items-center justify-center gap-y-1 px-2 pt-1.5 pb-0.5 bg-slate-400 rounded-xl'
              >
                <MdDashboard className='h-full w-full'/>
                <span className='block h-1 w-1/2 bg-amber-600 rounded-full'></span>
              </Link>
            </li>
            <li className='h-10 w-10'>
              <Link to={'/chats'} 
                className='h-full w-full flex flex-col items-center justify-center gap-y-1 px-2 pt-1.5 pb-0.5 bg-slate-400 rounded-xl'
              >
                <MdChat className='h-full w-full' />
                <span className='block h-1 w-1/2 bg-amber-600 rounded-full'></span>
              </Link>
            </li>
            <li className='h-10 w-10'>
              <Link to={'/settings'} 
                className='h-full w-full flex flex-col items-center justify-center gap-y-1 px-2 pt-1.5 pb-0.5 bg-slate-400 rounded-xl'
              >
                <MdSettings className='h-full w-full' />
                <span className='block h-1 w-1/2 bg-amber-600 rounded-full'></span>
              </Link>
            </li>
          </ul>
          <ul className='pt-6 mt-6 border-t border-gray-500'>
            <li className='h-10 w-10'>
              <Link to={''} 
                className='h-full w-full flex flex-col items-center justify-center gap-y-1 px-2 pt-1.5 pb-0.5 bg-slate-400 rounded-xl'
              >
                <MdModeNight className='h-full w-full' />
                <span className='block h-1 w-1/2 bg-amber-600 rounded-full'></span>
              </Link>
            </li>
          </ul>
        </nav>
    //   </div>
    // </div>


    // <nav className='h-full w-[5%] py-5 bg-white'>
    //   <ul className='relative h-full w-full bg-black flex flex-col items-center justify-center gap-y-5'>
    //     <li className='absolute top-0'>
    //         <Link to={'/'}>
    //           <img src={ReactLogo} alt="App logo" />
    //         </Link>
    //     </li>
    //     <li>
    //         <Link to='/' className='block bg-blue-500 p-2 text-2xl'>
    //           <FaHome />
    //         </Link>
    //     </li>
    //     <li>
    //         <Link to='chats' className='block bg-blue-500 p-2 text-2xl'>
    //           <BsChatSquareTextFill />
    //         </Link>
    //     </li>
    //     <li>
    //         <Link to='' className='block bg-blue-500 p-2 text-2xl'>
    //           <FaHome />
    //         </Link>
    //     </li>
    //     <li>
    //         <Link to='settings' className='block bg-blue-500 p-2 text-2xl'>
    //           <BsGearWideConnected />
    //         </Link>
    //     </li>
    //     <li onClick={handleLogout} className='absolute bottom-0 bg-blue-500 p-2 text-2xl cursor-pointer'>
    //         <GoSignOut />   
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Navbar;
