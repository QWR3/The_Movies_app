import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "search",
    initialState: {value: ''},
    reducers: {
        setSearch: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setSearch} = slice.actions
export default slice.reducer