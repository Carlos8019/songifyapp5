import React from "react";
import { InputSongs, CardSong } from '@components'
import { useNavigate } from "react-router-dom";
import { URL_TRACK_DETAIL } from "@utils/Constants.utils";
import { MSG_SEARCH_SONG, MSG_SEARCH_SONG_TEXT2 } from "@utils/Constants.utils";
//composant pour rechercher un titre on utilise le CardSong en tant que
export default function RechercherTrack() {
    const navigate = useNavigate()
    const handleSelectSong = (event, newValue) => {
        navigate(URL_TRACK_DETAIL, { state: newValue });
    }

    return (
        <>
            <CardSong title={MSG_SEARCH_SONG} description={MSG_SEARCH_SONG_TEXT2}>
                <InputSongs onChange={handleSelectSong} />
            </CardSong>

        </>

    )
}