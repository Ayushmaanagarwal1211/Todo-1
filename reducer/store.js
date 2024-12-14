import { configureStore } from "@reduxjs/toolkit";
import slice from './slice'
import filter_slice from './filterSlice'

export const store = configureStore({
    reducer :{
        task : slice,
        filter_tasks:filter_slice
    }
})