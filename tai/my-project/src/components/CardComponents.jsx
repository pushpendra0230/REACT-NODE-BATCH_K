import React from 'react'
const CardComponents = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className='flex flex-col relative cursor-pointer hover:shadow-red-600 shadow-2xl left-28 top-20 font-sans-serif items-center justify-center w-auto h-[480px] m-1 p-4  bg-blue-800 rounded-2xl text-white'
        >
          <img
            className='w-32 h-32 object-cover rounded-full border-4 border-red-600'
            src={item.pic}
            alt='Img'
          />
          <h1 className='text-3xl font-bold m-5 text-left'>{item.name}</h1>
          <ul className='text-left space-y-2'>
            <div className="  flex flex-row gap-2 items-center justify-start">
              <img
                className='w-8 h-8 object-cover rounded-full border-red-600'
                src={item.pic}
                alt='Img'
              />
              <li className='w-[100%] bg-red-600 font-roboto rounded-xl p-2'>Employee ID : {item.employee_id}</li>
            </div>
            <div className=' flex flex-row items-center gap-2 justify-start'>
              <img
                className='w-8 h-8 object-cover rounded-full border-red-600'
                src={item.pic}
                alt='Img'
              />
              <li className='w-[100%] bg-red-600 rounded-xl p-2'>contact : {item.phone}</li>
            </div>
            <div className=' flex flex-row items-center gap-2 justify-start'>
              <img
                className='w-8 h-8 object-cover rounded-full'
                src={item.pic}
                alt='Img'
              />
              <li className='w-[100%] bg-red-600 font-roboto rounded-xl p-2'>Email : {item.email}</li>
            </div>
          </ul>
        </div>
      ))}
    </>
  )
}
export default CardComponents;