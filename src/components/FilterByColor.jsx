import React ,{useState,useEffect} from 'react'
import FilterInput from './FilterInput'
import { useDispatch, useSelector } from 'react-redux'
import { filter_by_color } from '../../reducer/filterSlice'
import { getState } from '../../reducer/slice'

export default function FilterByColor() {
      let dispatch = useDispatch()
      function handleChange(e){
          let name = e.target.name
          dispatch(filter_by_color(name))
      }
  return (
    <div className='flex-1 justify-center flex items-center flex-col gap-2'>
      <h1>Filter By Color</h1>
      
      <FilterInput onChange={handleChange} color={"Green"}/>
      <FilterInput onChange={handleChange} color={"Blue"}/>
      <FilterInput onChange={handleChange} color={"Orange"}/>
      <FilterInput onChange={handleChange} color={"Purple"}/>
      <FilterInput onChange={handleChange} color={"Red"}/>

     
    </div>
  )
}
