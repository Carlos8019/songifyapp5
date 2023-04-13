import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RechercherTrack, TrackDetail } from "@views/songs";
import { URL_TRACK_DETAIL } from "@utils/Constants.utils";
import MenuInitial from '@views/menu/MenuInitial.view'

export default function RoutesApp() {
    return (
        <BrowserRouter>
          <MenuInitial />
            <Routes>
                <Route index element={<RechercherTrack />} />
                <Route path={URL_TRACK_DETAIL} element={<TrackDetail />} />
            </Routes>
        </BrowserRouter>
    )
}