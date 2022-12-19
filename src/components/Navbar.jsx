import React from 'react';
import ReactLogo from '../assets/react.svg';
import { Link } from 'react-router-dom';
import { MdHome, MdDashboard, MdChat, MdSettings, MdLightMode, MdModeNight } from "react-icons/md";

const Navbar = () => {  
  return (
    // <div className='fixed h-full w-16'>
      <nav className='h-full w-full px-3 py-4'>
        <ul className='relative pt-28 flex flex-col items-center gap-y-6'>

          {/* Start of App logo */}
          
          <li className='absolute top-0 h-12 w-12'>
            <Link to={'/'} 
              className='h-full w-full'
            >
              <img src={ReactLogo} alt="App Logo" className='h-full w-full' />
            </Link>
          </li>

          {/* End of App logo */}

          {/* Start of Home navigator */}
          
          <li className='h-10 w-10'>
            <Link to={'/'} 
              className='h-full w-full flex flex-col items-center justify-center gap-y-1 px-2 pt-1.5 pb-0.5 bg-slate-400 rounded-xl'
            >
              <MdHome className='h-full w-full'/>
              <span className='block h-1 w-1/2 bg-amber-600 rounded-full'></span>
            </Link>
          </li>

          {/* End of Home navigator */}

          {/* Start of Dashboard navigator */}
          
          <li className='h-10 w-10'>
            <Link to={'dashboard'} 
              className='h-full w-full flex flex-col items-center justify-center gap-y-1 px-2 pt-1.5 pb-0.5 bg-slate-400 rounded-xl'
            >
              <MdDashboard className='h-full w-full'/>
              <span className='block h-1 w-1/2 bg-amber-600 rounded-full'></span>
            </Link>
          </li>

          {/* End of Dashboard navigator */}

          {/* Start of Chats navigator */}
          
          <li className='h-10 w-10'>
            <Link to={'/chats'} 
              className='h-full w-full flex flex-col items-center justify-center gap-y-1 px-2 pt-1.5 pb-0.5 bg-slate-400 rounded-xl'
            >
              <MdChat className='h-full w-full' />
              <span className='block h-1 w-1/2 bg-amber-600 rounded-full'></span>
            </Link>
          </li>

          {/* End of Chats navigator */}

          {/* Start of Settings navigator */}
          
          <li className='h-10 w-10'>
            <Link to={'/settings'} 
              className='h-full w-full flex flex-col items-center justify-center gap-y-1 px-2 pt-1.5 pb-0.5 bg-slate-400 rounded-xl'
            >
              <MdSettings className='h-full w-full' />
              <span className='block h-1 w-1/2 bg-amber-600 rounded-full'></span>
            </Link>
          </li>

          {/* End of Settings navigator */}
          
        </ul>
        <ul className='pt-6 mt-6 border-t border-gray-500'>

          {/* Start of Light and Dark mode option */}
          
          <li className='h-10 w-10'>
            <Link to={''} 
              className='h-full w-full flex flex-col items-center justify-center gap-y-1 px-2 pt-1.5 pb-0.5 bg-slate-400 rounded-xl'
            >
              <MdModeNight className='h-full w-full' />
              <span className='block h-1 w-1/2 bg-amber-600 rounded-full'></span>
            </Link>
          </li>

          {/* End of Light and Dark mode option */}
          
        </ul>
      </nav>
    // </div>
  );
};

export default Navbar;
