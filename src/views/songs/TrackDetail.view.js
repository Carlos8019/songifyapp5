import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import Card from '@mui/material/Card';
import GetLiryc from "@api/ApiLyric.services";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { MSG_LYRIC_NOT_AVAILABLE } from "@utils/Constants.utils";
import { CardSong, GifSong, ListMotsUtilises, FavoriteButton, TrackCard } from '@components'
import { MSG_SONG_DETAIL, MSG_TITLE_TRACK_LABEL, MSG_GIF_SEARCH, MSG_FREQUENT_WORDS } from "@utils/Constants.utils";
import FrequentWords from "@utils/FrequentWords.utils";
import SongContext from "@context/song.context";

let style = {
    display: "flex",
    flexDirection: "row",
    alignItems: "space-between",
    justifyContent: "center"
}

export default function TrackDetail() {
    const { setSong } = useContext(SongContext)
    const [lyric, setLyric] = useState("");
    const [listWords, setListWord] = useState([]);
    const location = useLocation();
    const data = location.state;

    const updateListWord = () => {
        setListWord(FrequentWords(lyric));
    }

    const updateLyric = () => {
        //on obtien la parole de la chanson
        GetLiryc(data.lyric_url).then((value) => {
            //on valide que la response soit string
            if (typeof value === "string") {
                setLyric(value);
            }
        })
    }

    useEffect(() => {
        updateLyric();
        updateListWord();
        setSong(data)
    }, [lyric])

    return (
        <div style={style}>
            <div >
                <CardSong title={MSG_GIF_SEARCH + data.title} description="">
                    <GifSong song={data.title} />
                </CardSong>
            </div>
            <div>
                <CardSong title={MSG_SONG_DETAIL} description="">
                    <div>
                        <Card sx={{ display: 'flex' }}>
                            <FavoriteButton />
                            <TrackCard data={data} width={400} />
                        </Card>
                        <div>
                            {MSG_TITLE_TRACK_LABEL}
                            <br />
                            <TextareaAutosize
                                minRows={4}
                                placeholder={MSG_LYRIC_NOT_AVAILABLE}
                                readOnly
                                defaultValue={lyric}
                                style={{ width: 450 }}
                            />
                        </div>
                    </div>
                </CardSong>
            </div>
            <div >
                <CardSong title={MSG_FREQUENT_WORDS} description="">
                    <ListMotsUtilises listWords={listWords} />
                </CardSong>
            </div>
        </div>
    )
}