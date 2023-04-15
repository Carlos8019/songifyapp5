import songsReducer from '@slice/songsSlice.slice'
import { configureStore } from "@reduxjs/toolkit";
import { getItem, setItem } from '@storage/local.storage';
import { NAME_LOCAL_STORAGE_FAVORITE } from "@utils/Constants.utils";

//on utilise le local storage
const persistState = getItem(NAME_LOCAL_STORAGE_FAVORITE)

//redux store
const store = configureStore({
    reducer: {
        song: songsReducer
    },
    //on ajoute le store dans le local storage 
    preloadedState:persistState
})

//on utilise subscribe pour enregistrer le local storage
store.subscribe(() => {
    setItem(NAME_LOCAL_STORAGE_FAVORITE, store.getState());
})

export default store