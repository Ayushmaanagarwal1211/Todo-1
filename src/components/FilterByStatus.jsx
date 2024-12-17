import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filter_by_status } from '../../reducer/filterSlice'
import { getState } from '../../reducer/slice'

export default function FilterByStatus() {
  let dispatch = useDispatch()
  let [filters,setFilters] = useState("all")
  dispatch(filter_by_status({filters}))
  function handleChange(e){
    e = e.target
    if(e.name !== filters){
      setFilters(e.name)      
    }
  }
  return (
    <div className='flex-1 flex flex-col justify-center'>
      <p><input type='radio' onClick={handleChange} checked={filters == "all"} name='all'></input>All</p>
      <p><input type='radio' onClick={handleChange}  checked={filters == "active"} name='active'></input>Active</p>
      <p><input type='radio' onClick={handleChange} checked={filters == "completed"}  name='completed'></input>Completed</p>
    </div>
  )
}
