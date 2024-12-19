import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getState } from '../../reducer/slice'

export default function RemainingTodos() {
  let tasks = useSelector(state=>getState(state))
  return (
    <div className='flex-1 flex justify-center items-center flex-col gap-2'>
      <h1>Remaining Todos</h1>
      <span>{tasks.reduce((acc,data)=>acc + (data.status=="active"?1:0),0)}</span>
    </div>
  )
}
