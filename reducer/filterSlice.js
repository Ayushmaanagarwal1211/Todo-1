import {createSlice} from '@reduxjs/toolkit'

let filter_slice = createSlice({
    initialState:{
        filter : "all",
        choice:[]
    },
    name : "todo",
    reducers : {
        filter_by_status : (state,action)=>{
            if(action.payload == "all" || action.payload == "active" ||action.payload == "completed"  ){
                state.filter  = action.payload
            }
        },
        filter_by_color : (state,action) =>{
            if(!["green","orange","blue","purple","red"].includes(action.payload.toLowerCase())){
                return 
            }
            if(state.choice.includes(action.payload)){
                state.choice = state.choice.filter((data)=>data!==action.payload)
                return
            }
            state.choice.push(action.payload)
        }
    }
})

export const {filter_by_status,filter_by_color} = filter_slice.actions
export default filter_slice.reducer