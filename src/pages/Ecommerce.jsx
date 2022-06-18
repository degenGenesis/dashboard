import React from 'react';
import { BsCurrencyDollary } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';

import { Stacked, Pie, Button, Sparkline } from '../components';
import { earningData, SparklineAreaData, ecomPieChartDat } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        
        {/* hero image */}
        <div className='
          bg-white dark:text-gray-200 dark:bg-secondary-dark-bg 
          h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 
          bg-hero-pattern bg-no-repeat bg-cover bg-center'
        >
          
          {/* earnings */}
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-xl'>$250,420.00</p>
            </div>
          </div>

          {/* button */}
          <div className='mt-6'>
            <Button 
              color='white'
              bgColor='blue'
              text='Download'
              borderRadius='10px'
            />
          </div>

        </div>
      </div>
    </div>
  )
};

export default Ecommerce;