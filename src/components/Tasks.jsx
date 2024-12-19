import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getState } from '../../reducer/slice'
import Task from './Task'

export default function Tasks() {
  let filter_tasks = useSelector(state=>getState(state))
  let choices  =useSelector(state=>state.filter_tasks.choice)
  let filters  =useSelector(state=>state.filter_tasks.filter)
  return (
    <div className='w-[100%] '>
      {
       filter_tasks?.length>0 &&  filter_tasks.map(data=>{
        if((choices.includes(data.color) || choices.length==0) && (data.status == filters || filters == "all")){
          return <Task key={data.id} task={data}/> 
        }
})
      }
    </div>
  )
}
