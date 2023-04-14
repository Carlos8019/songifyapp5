import React, { useEffect, useState } from "react";
import IconButton from '@mui/joy/IconButton';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Tooltip from '@mui/material/Tooltip';
import { MSG_FAVORITE_TOOLTIP } from "@utils/Constants.utils";
import LinearProgress from '@mui/joy/LinearProgress';
const style = {
    clicked: "solid",
    unClicked: "soft",
    hide: "hidden",
    show: "visible"
}
export default function FavoriteButton() {
    const [flagClicked, setFlagClicked] = useState(false);
    const [showBar, setShowBar] = useState(false);
    const handleClick = () => {
        setShowBar(true);
        setFlagClicked(!flagClicked)
    }
    const handleProgressBar = () => {
        setShowBar(false);
    }
    useEffect(() => {
        //juste un effect visuel
        setTimeout(() => {
            handleProgressBar();
        }, 1000);

    }, [flagClicked])
    return (
        <div>
            <Tooltip title={MSG_FAVORITE_TOOLTIP}>
                <IconButton size="sm" variant={flagClicked ? style.clicked : style.unClicked} onClick={handleClick}>
                    <FavoriteBorder />
                </IconButton>
            </Tooltip>
            <LinearProgress sx={{ visibility: showBar ? style.show : style.hide }} />
            <br />
        </div>
    )
}