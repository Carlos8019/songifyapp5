import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import GetLiryc from "@api/ApiLyric.services";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { MSG_LYRIC_NOT_AVAILABLE } from "@utils/Constants.utils";
import { CardSong } from '@components'
import { MSG_SONG_DETAIL, MSG_TITLE_TRACK_LABEL } from "@utils/Constants.utils";


export default function TrackDetail() {
    const [lyric, setLyric] = useState("");
    const location = useLocation();
    const data = location.state;
    //on obtien la parole de la chanson
    GetLiryc(data.lyric_url).then((data) => {
        //on valide que la response soit string
        if (typeof data === "string") {
            setLyric(data)
        }
    })

    return (
        <>
            <CardSong title={MSG_SONG_DETAIL} description="">
                <div>
                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    {data.title}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {data.artist}
                                    <br />
                                    {data.release_date}
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                                <IconButton aria-label="play/pause">
                                    <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                                </IconButton>

                            </Box>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={data.image}
                            alt={data.title}
                        />

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
        </>
    )
}