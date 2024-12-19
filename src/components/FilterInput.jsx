import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getState } from '../../reducer/slice'
import { filter_by_color } from '../../reducer/filterSlice'

export default function FilterInput({color,onChange}) {
    let colors = useSelector(state=>state.filter_tasks.choice)
  return (
    <div key={color} className="flex w-[200px] m-auto gap-2 items-center justify-between">
        <input checked={colors.includes(color.toLowerCase())} onChange={onChange} name={color.toLowerCase()} type="checkbox" id={color}></input>
        <div className={`bg-${color.toLowerCase()}-700 h-[15px] w-[50px] rounded-md `}></div>
        <label htmlFor={color} className='w-[40px]'>{color}</label>
      </div>
  )
}
