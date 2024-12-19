import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filter_by_status } from '../../reducer/filterSlice'
import { getState } from '../../reducer/slice'

export default function FilterByStatus() {
  let dispatch = useDispatch()
  let filters = useSelector(state=>state.filter_tasks.filter)
  function handleChange(e){
      dispatch(filter_by_status(e.target.name))
  }
  return (
    <div className='flex-1 flex flex-col justify-center'>
      <p><input type='radio' onClick={handleChange} checked={filters == "all"} name='all'></input>All</p>
      <p><input type='radio' onClick={handleChange}  checked={filters == "active"} name='active'></input>Active</p>
      <p><input type='radio' onClick={handleChange} checked={filters == "completed"}  name='completed'></input>Completed</p>
    </div>
  )
}
