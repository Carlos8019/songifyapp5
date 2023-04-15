import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RechercherTrack, TrackDetail,FavoriteSongs } from "@views/songs";
import { URL_TRACK_DETAIL, URL_TRACK_FAVORITE } from "@utils/Constants.utils";
import MenuInitial from '@views/menu/MenuInitial.view'
//context pour partager le chanson selectione
import { SongProvider } from "@context/song.context";
//provider et store pour enregistrer les chansons dans les favoris
import { Provider } from 'react-redux';
import store from '@redux/store.redux';

export default function RoutesApp() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <SongProvider>
                    <MenuInitial />
                    <Routes>
                        <Route index element={<RechercherTrack />} />
                        <Route path={URL_TRACK_DETAIL} element={<TrackDetail />} />
                        <Route path={URL_TRACK_FAVORITE} element={<FavoriteSongs />} />
                    </Routes>
                </SongProvider>
            </BrowserRouter>
        </Provider>
    )
}