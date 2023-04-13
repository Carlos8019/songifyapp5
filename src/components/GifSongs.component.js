import React from "react";
import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
import { API_DATA } from "@utils/Constants.utils";

export default function GifSong(props) {
    const gf = new GiphyFetch(API_DATA.API_KEY_GIF)
    const fetchGifs = (offset) => gf.search(props.song, { offset, limit: 10 })

    return (
        <>
            <Grid width={600} columns={3} fetchGifs={fetchGifs} />
        </>
    )
}