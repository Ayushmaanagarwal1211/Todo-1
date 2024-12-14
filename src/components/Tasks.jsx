import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getState } from '../../reducer/slice'
import Task from './Task'

export default function Tasks() {
  let filter_tasks = useSelector(state=>state.filter_tasks.tasks)
  useEffect(()=>{
    console.log(filter_tasks)
  },[filter_tasks])
  return (
    <div className='w-[100%] '>
      {
       filter_tasks?.length>0 &&  filter_tasks.map(data=><Task task={data}/>)
      }
    </div>
  )
}
