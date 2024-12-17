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
            let {task} = action.payload
            let arr = [...state.tasks]
            arr = arr.filter(data=>data.id !== task.id)
            state.tasks = [...arr]
            setDataToBackend([...arr])
            return 
        },
        editTask : (state,action) =>{
            let {task,input} = action.payload
            let arr = [...state.tasks]
            console.log(task.id)
            arr[task.id] = {...arr[task.id],task:input}
            state.tasks = [...arr]
            setDataToBackend([...arr])
            return 
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
        },
        markAllCompleted:(state,action)=>{
            let arr = [...state.tasks]
            console.log(arr)
            for(let i of arr){
                i.status = "completed"
            }
            setDataToBackend([...arr])
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