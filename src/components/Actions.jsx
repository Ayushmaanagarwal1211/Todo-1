import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCompleted, markAllCompleted } from '../../reducer/slice'

export default function Actions() {
  let dispatch = useDispatch()
  function handleMarkAllCompleted(){
      dispatch(markAllCompleted())
  }
  function handleClearAll(){
    dispatch(clearCompleted())
  }
  return (
    <div className='flex-1 flex justify-center items-center flex-col'>
      <h1>Actions</h1>
      <button onClick={handleMarkAllCompleted} className='bg-blue-500 border-white border-[1px] rounded-md text-white w-[150px] p-2 ' >Mark All Completed</button>
      <button onClick={handleClearAll} className='bg-blue-500 border-white border-[1px] rounded-md text-white w-[150px] p-2 '>Clear Completed</button>
    </div>
  )
}
