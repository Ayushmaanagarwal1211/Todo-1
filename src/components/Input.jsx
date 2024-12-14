import React, { useEffect, useReducer, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../reducer/slice'

export default function Input() {
    let task = useRef()
    let color = useRef()
    let dispatch = useDispatch()
    useEffect(()=>{
        function handleEvent(event){
            if(event.key == 'Enter'){
                handleAddTask()
            }
        }
        window.document.addEventListener("keypress",handleEvent)
        return ()=>{
            window.document.removeEventListener("keypress",handleEvent)
        }
    },[])
    function handleAddTask(){
        if(task.current.value == ""){
            return 
        }
        let data = {
            task:task.current.value , 
            color : color.current.value,
            date : new Date().toISOString(),
            status : "active"
        }
        dispatch(addTask(data))
    }
  return (
    <div className='w-[100%] flex '>
        <input  ref={task} className='h-[20px] border-[1px] p-6 border-gray-200  w-[85%]' placeholder='What Needs to be done ?'></input>
        <select ref={color} className='w-[15%] text-center bg-white border-gray-200 border-[1px]'>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="orange">Orange</option>
            <option value="purple">Purple</option>
            <option value="red">Red</option>
        </select>
    </div>
  )
}
