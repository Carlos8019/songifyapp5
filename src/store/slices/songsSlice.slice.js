import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    //array des chansons favoris
    favoriteArray: []
}
const songsSlice = createSlice({
    name: 'songs',
    initialState,
    reducers: {
        //action pour ajouter un chanson dans l'array
        songAdd: (state, action) => {
            //ajouter la chanson dans l'array redux toolkit fait les affaires de inmutation
            state.favoriteArray.push(action.payload)
        }
    }
})

export default songsSlice.reducer
export const { songAdd } = songsSlice.actions