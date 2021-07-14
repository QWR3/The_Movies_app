import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "genre",
    initialState: {value: ''},
    reducers: {
        setGenre: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setGenre} =slice.actions
export default slice.reducer