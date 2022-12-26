import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {value : {LightTheme: true}},
    reducers: {
        changeTheme: (state,action)=>{
            state.value.LightTheme = !state.value.LightTheme
        }
    }
})
export const {changeTheme} = themeSlice.actions
export default themeSlice.reducer
