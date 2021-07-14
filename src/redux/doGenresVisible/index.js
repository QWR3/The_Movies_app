import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "doGenresVisible",
    initialState: {value: false},
    reducers: {
        setGenresVisibleTrue: (state) => {
            state.value = true
        },
        setGenresVisibleFalse: (state) => {
            state.value = false
        }
    }
})

export const {setGenresVisibleTrue, setGenresVisibleFalse} = slice.actions
export default slice.reducer