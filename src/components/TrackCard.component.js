import React from "react";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}
export default function TrackCard(props) {
    const data = props.data;
    return (
        <>
            <Box sx={{ display: style.display, flexDirection: style.flexDirection, width: props.width, alignItems:style.alignItems }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6">
                        {data.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {data.artist}
                        <br />
                        {data.release_date}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={data.image}
                    alt={data.title}
                />
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                    </IconButton>
                </Box>
            </Box>
        </>
    )
}