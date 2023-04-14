import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { MSG_FREQUENT_WORDS_COUNT } from "@utils/Constants.utils";
import { GifWordLyric } from '@components'

export default function ListMotsUtilises(props) {
    const data = props.listWords.map((el) => {
        return { word: el[0], num: el[1] }
    })

    return (
        <>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {props.listWords.map((el) => (
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar sx={{ width: 100, height: 100 }}>
                                <GifWordLyric word={el[0]} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={el[0]} secondary={el[1] + MSG_FREQUENT_WORDS_COUNT} />
                    </ListItem>
                ))}
            </List>
        </>
    )
}