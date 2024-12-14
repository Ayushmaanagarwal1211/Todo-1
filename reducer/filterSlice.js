import {createSlice} from '@reduxjs/toolkit'
import { getDateFromBackend, setDataToBackend } from '../service/localStorage'
function getId(){
    let max = -Infinity
    for(let i of getDateFromBackend()){
        max = Math.max(i.id , max)
    }
    return max == -Infinity ? 0 : max+1
}
let filter_slice = createSlice({
    initialState:{
        tasks : []
    },
    name : "todo",
    reducers : {
        filter_by_status : (state,action)=>{
            let {filters ,tasks} = action.payload
            if(filters == "all"){
                state.tasks = [...tasks]
                return 
            }
            let arr = tasks.filter(data=>filters == data.status)
            state.tasks = [...arr]

        },
        filter_by_color : (state,action) =>{

        }
    }
})
export function getState (state){
    return state.task.tasks
}
export const {filter_by_status,filter_by_color} = filter_slice.actions
export default filter_slice.reducer