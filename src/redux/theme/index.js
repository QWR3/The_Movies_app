import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "theme",
    initialState: {value: "light"},
    reducers: {
        setLightTheme: (state) => {
            state.value = 'light'
        },
        setDarkTheme: (state) => {
            state.value = 'dark'
        }
    }
})

export const {setLightTheme, setDarkTheme} = slice.actions
export default slice.reducer