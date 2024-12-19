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
            state.tasks.push({id:getId(),...action.payload})
            setDataToBackend( state.tasks)
        },
        deleteTask : (state,action)=>{
            let {task} = action.payload
            state.tasks = state.tasks.filter(data=>data.id !== task.id)
            setDataToBackend(state.tasks)
            return 
        },
        editTask : (state,action) =>{
            let {id,input} = action.payload
            let index = state.tasks.findIndex((data)=>data.id == id)
            state.tasks[index] = {...state.tasks[index],task:input}
            setDataToBackend(state.tasks)
            return 
        },
        changeStatus : (state,action) => {
            let {id,status} = action.payload
            let index = state.tasks.findIndex((data)=>data.id == id)
            state.tasks[index] = {...state.tasks[index],status}
            setDataToBackend(state.tasks)

        },
        fill : (state)=>{
            state.tasks = getDateFromBackend()
        },
        markAllCompleted:(state,action)=>{
            for(let i of state.tasks){
                i.status = "completed"
            }
            setDataToBackend(state.tasks)
            return 
        },
        clearCompleted : (state,action)=>{
            for(let i of state.tasks){
                i.status = "active"
            }
            setDataToBackend(state.tasks)
        }
    }
})
export function getState (state){
    return state.task.tasks
}
export const {addTask,editTask,changeStatus,changeStatusForAll,deleteTask,fill,clearCompleted,markAllCompleted} = slice.actions
export default slice.reducer