import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name:"movieInfo",
    initialState:{},
    reducers:{
        setMovieInfo:(state,action)=>action.payload
    }
})

export const {setMovieInfo}=slice.actions
export default slice.reducer