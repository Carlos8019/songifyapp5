import React from "react";
import { useSelector } from 'react-redux';
import { TrackCard } from '@components'
import Typography from '@mui/material/Typography';
import { MSG_FAVORITE_TITLE_PAGE } from "@utils/Constants.utils";

export default function FavoriteSongs() {
    const songs = useSelector((state) => state.song.favoriteArray)
    return (
        <>
            <br />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
                <Typography variant="h4" gutterBottom>
                    {MSG_FAVORITE_TITLE_PAGE}
                </Typography>
            </div>
            <div style={{display:"flex"}}>
                <div style={{
                    display: "flex", flexDirection: "row", alignContent: "strech", alignItems:"center", flexBasis: 400,
                    flexGrow: 4, flexShrink: 0, flexWrap:"wrap"
                }}>
                    {songs.map((el) => (
                        <TrackCard data={el} width={300} />
                    ))}
                </div>
            </div>
        </>
    )

}