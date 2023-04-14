import React, { useEffect, useState } from 'react'
import { Carousel } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
import { API_DATA } from "@utils/Constants.utils";
//retourne une carrousel des gifs pour chaque mot de la parole
export default function GifWordLyric(props) {
    const gf = new GiphyFetch(API_DATA.API_KEY_GIF)
    const fetchGifs = (offset) => gf.search(props.word, { offset, limit: 1 })
    return (
        <>
            <Carousel gifHeight={40} gutter={6} fetchGifs={fetchGifs} key={props.word} />
        </>
    )
}


