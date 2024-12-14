import React from 'react'

export default function Actions() {
  return (
    <div className='flex-1 flex justify-center items-center flex-col'>
      <h1>Actions</h1>
      <button className='bg-blue-500 border-white border-[1px] rounded-md text-white w-[150px] p-2 ' >Mark All Completed</button>
      <button className='bg-blue-500 border-white border-[1px] rounded-md text-white w-[150px] p-2 '>Clear Completed</button>
    </div>
  )
}
