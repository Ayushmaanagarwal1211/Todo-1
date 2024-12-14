import React, { useEffect, useState } from 'react'
import {FaCheck} from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { changeStatus } from '../../reducer/slice'
export default function Task({task}) {
    let dispatch = useDispatch()

    function handleClick(){
        
        dispatch(changeStatus({id:task.id,status:(task.status=="active"?"completed":"active")}))
    }
  return (
    <div key={task.id}  className='flex gap-3 border-[1px] items-center border-gray-200 p-3 '>
        <div className='w-auto '>
            <label  onClick={handleClick} className='rounded-full border-[1px] border-gray-200 block w-[30px] flex justify-center items-center p-1 h-[30px]' htmlFor={task.id}>{task.status == "active" ? <></> : <FaCheck size={'40px'} color='green'/>}</label>
            <input id={task.id} hidden  type='checkbox'></input>
        </div>
        <h1>{task.task}</h1>
    </div>
  )
}
