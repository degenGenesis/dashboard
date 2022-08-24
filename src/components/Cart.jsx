import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { useStateContext } from '../contexts/ContextProvider';
import { cartData } from '../data/dummy';
import { Button } from '.';

const Cart = () => {
  const { currentColor } = useStateContext();

  return (
    <div className='bg-half-transparent w-full fixed nac-item top-0 right-0'>
      <div className='float-right h-screen duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8'>
        <div className='flex justify-between items-center'>
          <p className='font-semibold text-lg'>Shopping Cart</p>
          <Button 
            icon={<MdOutlineCancel />}
            color='rgb(153, 171, 180)'
            bgHoverColor='light-gray'
            size='2xl'
            borderRadius='50%'
          />
        </div>
      </div>
    </div>
  )
}

export default Cart