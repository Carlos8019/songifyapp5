import { useState, createContext } from "react";
import { useDispatch } from "react-redux";
import {songAdd} from "@slice/songsSlice.slice"

/** on utilise un context des chansons pour partager l'information
    de la chanson selectionéé partout les composants
    on utilise redux pour les favoris
***/
const SongContext = createContext();
const SongProvider = ({ children }) => {
    const dispatch = useDispatch();
    const [song, setSong] = useState({})
    //appeler les actions de redux ajouter une chanson dans les favoris
    const setFavorite = () => {
        dispatch(songAdd(song))
    }
    const data = { song, setSong, setFavorite }
    return (
        <SongContext.Provider value={data}>
            {children}
        </SongContext.Provider>
    )
}
export { SongProvider }
export default SongContext;