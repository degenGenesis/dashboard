import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  
  // hanburger menu icon
  <TooltipComponent 
    content={title}
    position='BottomCenter'>
    <button 
      type='button'
      onClick={customFunc}
      style={{ color }}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'
    >
      <span
        style={{ background: dotColor }}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
      />
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  
  // state variables
  const { activeMenu, setActiveMenu, handleClick, isClicked, setIsClicked, screenSize, setScreenSize } = useStateContext();

  // event handling
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize)

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative'>
      
      {/* hamburger menu */}
      <NavButton 
        title='Sidebar menu' 
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} 
        color='blue'
        icon={<AiOutlineMenu />} 
      />

      {/* Cart */}
      <div className='flex'>
        <NavButton 
          title='Cart' 
          customFunc={() => handleClick('cart')} 
          color='blue'
          icon={<FiShoppingCart />} 
        />

        {/* Chat */}
        <NavButton 
          title='Chat'
          dotColor='03C907' 
          customFunc={() => handleClick('chat')} 
          color='blue'
          icon={<BsChatLeft />} 
        />

        {/* Notifications */}
        <NavButton 
          title='Notifications' 
          customFunc={() => handleClick('notification')} 
          color='blue'
          icon={<RiNotification3Line />} 
        />

        {/* User Profile */}
        <TooltipComponent
          content="User Profile"
          position='BottomCenter'
        >
          <div
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={() => handleClick('userProfile')}
          >

            {/* PFP */}
            <img
              className='rounded-full w-8 h-8'
              src={avatar}
              alt='User Profile'
            />

            {/* Greeting */}
            <p>
              <span className='text-gray-400 text-14'>Hi,</span> {' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>Michael</span>
            </p>

            {/* Drop-down Menu */}
            <MdKeyboardArrowDown className='text-gray-400 text-14' />

          </div>
        </TooltipComponent>
        
        {/* Navigation */}
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar