import React, { useEffect, useRef, useState } from 'react'
import {FaCheck,FaPen,FaPenToSquare,FaX} from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { changeStatus, deleteTask, editTask } from '../../reducer/slice'

export default function Task({task}) {
    let dispatch = useDispatch()
    let [isEdit,setIsEdit] = useState(false)
    let [input,setInput] = useState(task.task)
    function handleClick(){
        dispatch(changeStatus({id:task.id,status:(task.status=="active"?"completed":"active")}))
    }
    function handleEdit(){
      dispatch(editTask({id:task.id , input}))
      setIsEdit(false)
    }
    function handleDelete(){
      dispatch(deleteTask({task}))
    }
  
  return (
    <div key={task.id}  className='flex gap-3 border-[1px] items-center justify-around border-gray-200 p-3 '>
        <div className='flex-1 flex gap-2 justify-center items-center '>
            <label  onClick={handleClick} className='rounded-full border-[1px] border-gray-400 block w-[30px] flex justify-center items-center p-1 h-[30px]' htmlFor={task.id}>{task.status == "active" ? <></> : <FaCheck size={'40px'} color='green'/>}</label>
            <input id={task.id} hidden  type='checkbox'></input>
            <p>{task.color}</p>
        </div>
        {!isEdit ? <h1 className='flex-1 flex'>{task.task}</h1> : <input className='flex-1' onChange={(e)=>setInput(e.target.value)} autoFocus value={input}  placeholder='Enter Title ...' ></input>}
        <div className='flex w-[100px] gap-20 flex-1'>
          {!isEdit ? 
        <FaPenToSquare onClick={()=>setIsEdit(true)}/>
            :
            <button onClick={handleEdit}>Submit</button>
      }
        <FaX onClick={handleDelete}/>
        </div>
    </div>
  )
}
