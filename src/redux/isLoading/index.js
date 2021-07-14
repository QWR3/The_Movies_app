import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "isLoading",
    initialState: {value: true},
    reducers: {
        setLoadingTrue: (state) => {
            state.value = true
        },
        setLoadingFalse: (state) => {
            state.value = false
        }
    }
})

export const {setLoadingTrue, setLoadingFalse} = slice.actions
export default slice.reducer