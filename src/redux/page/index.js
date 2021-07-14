import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "page",
    initialState: {
        value: 1
    },
    reducers: {
        nextPage: (state) => {
            state.value += 1
        },
        previewPage: (state) => {
            state.value -= 1
        },
        setPage: (state, action) => {
            state.value = action.payload
        }


    }
})

export const {nextPage, previewPage, setPage} = slice.actions
export default slice.reducer