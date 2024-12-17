import {createSlice} from '@reduxjs/toolkit'
import { getDateFromBackend, setDataToBackend } from '../service/localStorage'

let filter_slice = createSlice({
    initialState:{
        filter : "all",
        choice:[]
    },
    name : "todo",
    reducers : {
        filter_by_status : (state,action)=>{
            let {filters } = action.payload
            state.filter  = filters
        },
        filter_by_color : (state,action) =>{
            let {filters} = action.payload
            state.choice = [...filters]
        }
    }
})
export function getState (state){
    return state.task.tasks
}
export const {filter_by_status,filter_by_color} = filter_slice.actions
export default filter_slice.reducer