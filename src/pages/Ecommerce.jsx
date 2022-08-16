import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, Sparkline } from '../components';
import { earningData, medicalProBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';

const DropDown = ({ currentMode }) => (
  <div className='w-28 border-1 border-color px-2 py-1 rounded-md'>
    <DropDownListComponent id='time' fields={{ text: 'Time', value: 'Id' }} style={{border: 'none', color: (currentMode === 'Dark') && 'white' }} value='1' dataSource={dropdownData} popupHeight='220px' popupWidth='120px' />
  </div>
)

const Ecommerce = () => {
  const { currentColor, currentMode } =  useStateContext();
  
  return (    
    // Ecommerce container
    <div className='mt-24'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        
        {/* earnings container */}
        <div className='
          bg-white dark:text-gray-200 dark:bg-secondary-dark-bg 
          h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 
          bg-hero-pattern bg-no-repeat bg-cover bg-center'
        >
          
          {/* earnings */}
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$250,420.00</p>
            </div>
          </div>

          
          {/**
           * currency icon
           * //! <BsCurrencyDollar />💲 icon causing unexpected behavior w/ download button element
           * //TODO: Check tailwind declarations of both elements
          */}
          <button type='button' style={{ backgroundColor: currentColor }} className='text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4'>
            <BsCurrencyDollar />
          </button>

          {/* download button */}
          <div className='mt-6'>
            <Button 
              color='white'
              bgColor='blue'
              text='Download'
              borderRadius='10px'
              // size='xl'
            />
          </div>
        </div>

        {/* revenue sources container */}
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
        
        {/* revenue sources */}
          {earningData.map((item) => (
            <div
              key={item.title}
              className='bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'
            >

              {/* revenue source buttons */}
              <button 
                type='button'
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'  
              >
                {item.icon}
              </button>

              {/* financial data */}
              <p className='mt-3'>

                {/* amount */}
                <span className='text-lg font-semibold'>
                 $ {item.amount}
                </span>

                {/* percent */}
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>

              {/* revenue source title */}
              <p className='text-sm text-gray-400 mt-1'>
                {item.title}
              </p>

            </div>
          ))}
          
        </div>
      </div>
      
      {/* revenue updates */}
      <div className='flex gap-10 flex-wrap justify-center'>
        
        {/* revenue updates container */}
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>

          {/* title container */}
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenue Updates</p>
            
            {/* key container */}
            <div className='flex items-center gap-4'>
              
              {/* expense key */}
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>
                  Expense
                </span>
              </p>

              {/* budget key */}
              <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>
                  Budget
                </span>
              </p>

            </div>
          </div>

          {/* Budget & Expense data container */}
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
              
              {/* Budget data container */}
              <div>
                
                {/* budget */}
                <p>
                  <span className='text-3xl font-semibold'>
                    $93,438
                  </span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>
                    23%
                  </span>
                </p>
                <p className='text-gray-500 mt-1'>
                  Budget
                </p>
              </div>

              {/* Expense data container */}
              <div className='mt-8'>

                {/* expense */}
                <p>
                  <span className='text-3xl font-semibold'>
                    $48,107
                  </span>
                </p>
                <p className='text-gray-500 mt-1'>
                  Expense
                </p>
              </div>

              {/* sparkline chart */}
              <div className='mt-5'>
                <Sparkline 
                  currentColor={currentColor}
                  id='line-sparkline'
                  type='Line'
                  height='80px'
                  width='250px'
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>

              {/* download report button */}
              <div className='mt-10'>
                <Button 
                  color='white'
                  bgColor={currentColor}
                  text='Download Report'
                  borderRadius='10px'
                />
              </div>
            </div>
            
            {/* stacked chart container */}
            <div>
              <Stacked 
                currentMode={currentMode}
                width='320px'
                height='360px'
              />
            </div>
          </div>

        </div>
        
        {/* monthly revenue, annual sales, recent transactions, sales overview, weekly stats, medical pro branding, leaders */}
        <div>          
          {/* earnings summary */}
          <div className='rounded-2xl md:w-400 p-4 m-3' style={{ backgroundColor: currentColor }}>            
            <div className='flex justify-between items-center'>
              <p className='font-semibold text-white text-2xl'>
                Earnings
              </p>              
              {/* monthly */}
              <div>
                <p className='text-2xl text-white font-semibold mt-8'>$63,448.78</p>
                <p className='text-gray-200'>Monthly Revenue</p>
              </div>
            </div>
            <div className='mt-4'>
              <Sparkline currentColor={currentColor} id='column-sparkline' height='100px' type='Column' data={SparklineAreaData} width='320px' color='rgb(242, 252, 253)' />
            </div>

            {/* annual */}
            <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10'>
              <div>
                <p className='text-2xl font-semibold'>$43,246</p>
                <p className='text-gray-400'>Annual Sales</p>
              </div>

              <div className='w-40'>
                <Pie id='pie-chart' data={ecomPieChartData} legendVisibility={false} height='160px' />
              </div>
            </div>

          </div> 
        </div>

        {/* recent txn's */}
        <div className='flex gap-10 m-4 flex-wrap justify-center'>
          <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl'>
            <div className='flex justify-between items-center gap-2'>
              <p className='text-xl font-semibold'>Recent Transactions</p>
              <DropDown currentMode={currentMode} />
            </div>
            <div className='mt-10 w-72 md:w-400'>
              {recentTransactions.map((item) => (
                <div key={item.title} className='flex justify-between mt-4'>
                  <div className='flex gap-4'>
                    <button type='button' style={{ color: item.iconColor, backgroundColor: item.iconBg, }} className='text-2xl rounded-lg p-4 hover:drop-shadow-xl'>
                      {item.icon}
                    </button>
                    <div>
                      <p className='text-md font-semibold'>{item.title}</p>
                      <p className='text-sm text-gray-400'>{item.desc}</p>
                    </div>
                  </div>
                  <p className={`text-${item.pcColor}`}>{item.amount}</p>
                </div>
              ))}
            </div>
            {/* 
              * add txn
              //TODO: implement button functionality 
            */}
            <div className='flex justify-between items-center mt-5 border-t-1 border-color'>
              <div className='mt-3'>
                <Button color='white' bgColor={currentColor} text='Add' borderRadius='18px' />
              </div>

              <p className='text-gray-400 text-sm'>36 Recent Transactions</p>
            </div>
          </div>

          {/* sales overview */}
          <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760'>
            <div className='flex justify-between items-center gap-2 mb-10'>
              <p className='text-xl font-semibold'>Sales Overview</p>
              <DropDown currentMode={currentMode} />
            </div>
            <div className='md:w-full overflow-auto'>
              <LineChart />
            </div>
          </div>
        </div>

        <div className='mt-10'>
          {weeklyStats.map((item) => (
            <div key={item.title} className='flex justify-between mt-4 w-full'>
              <div className='flex gap-4'>
                <button type='button' style={{ background: item.iconBg }} className='text-2xl hover:drop-shadow-xl text-white rounded-full p-3'>
                  {item.icon}
                </button>
                <div>
                  <p className='text-md font-semibold'>{item.title}</p>
                  <p className='text-sm text-gray-400'>{item.desc}</p>
                </div>
              </div>

              <p className={`text-${item.pcColor}`}>{item.amount}</p>
            </div>
          ))}
          <div className='mt-4'>
            <Sparkline currentColor={currentColor} id='area-sparkLine' height='160px' type='Area' data={SparklineAreaData} width='320px' color='rgb(242, 252, 253)' />
          </div>
        </div>

      </div>
    </div>
  )
};

export default Ecommerce;