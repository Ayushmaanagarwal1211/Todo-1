import {createSlice} from '@reduxjs/toolkit'
import { getDateFromBackend, setDataToBackend } from '../service/localStorage'
function getId(){
    let max = -Infinity
    for(let i of getDateFromBackend()){
        max = Math.max(i.id , max)
    }
    return max == -Infinity ? 0 : max+1
}
let slice = createSlice({
    initialState:{
        tasks : []
    },
    name : "todo",
    reducers : {
        addTask : (state,action)=>{
            let arr = [...state.tasks]
            arr.push({id:getId(),...action.payload})
            setDataToBackend(arr)
            state.tasks = [...arr]
        },
        deleteTask : (state,action)=>{

        },
        editTask : (state,action) =>{

        },
        changeStatus : (state,action) => {
            let {id,status} = action.payload
            let arr = [...state.tasks]
            let index = arr.findIndex((data)=>data.id == id)
            arr[index] = {...arr[index],status}
            state.tasks = arr
            setDataToBackend(arr)

        },
        changeStatusForAll : (state,action) =>{

        },
        fill : (state)=>{
            state.tasks = getDateFromBackend()
        }
    }
})
export function getState (state){
    return state.task.tasks
}
export const {addTask,editTask,changeStatus,changeStatusForAll,deleteTask,fill} = slice.actions
export default slice.reducer