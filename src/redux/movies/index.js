import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "movies",
    initialState: {},
    reducers: {
        setMovies: (state, action) =>
            action.payload

    }
})

export const {setMovies} = slice.actions
export default slice.reducer