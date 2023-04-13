import React, { useState } from "react"
import { Autocomplete } from "@mui/material"
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import GetSongs from "@api/ApiSong.services";
import { MSG_SEARCH_SONG } from "@utils/Constants.utils";

//on passe dans le props la methode onChange pour le gerer dans la vue
export default function InputSongs({ onChange }) {
    const [data, setdata] = useState([]);
    //on utilise une fonctionne handler afin de lancer la recherche dans l'api    
    const handleChange = (event, newInputValue) => {
        GetSongs(newInputValue).then((values) => {
            //s'il y a des données on fait la mise à jour du state
            if (values) {
                setdata(values);
            }
        });
        event.preventDefault();
    }
    return (
        <>
            <Autocomplete
                disablePortal
                id="search-track-input"
                getOptionLabel={(option) => option.title}
                onInputChange={handleChange}
                onChange={onChange}
                filterOptions={(x) => x}
                options={data}
                sx={{ width: 300 }}
                renderOption={(props, option) => (
                    <Box component="li" {...props} key={option.id}>
                        {option.title}
                    </Box>
                )}
                renderInput={(params) => <TextField {...params} label={MSG_SEARCH_SONG} />}
            />
        </>
    )
}