import React from "react";

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
//style base
let cardStyle = {
    display: 'block',
    width: '35vw',
    transitionDuration: '0.3s',
    height: '35vw',
    overflowY: "scroll"
}

//template card pour les pages, on utilise le props pour ajouter un composant children
export default function CardSongs(props) {
    return (
        <>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 7, pb: 6 }}>
                <Grid container spacing={1} alignItems="center">
                    <Grid
                        item
                        key={1}
                        xs={12}
                        sm={12}
                        md={4}
                    >
                        <Card style={cardStyle}>
                            <CardHeader
                                title={props.title}
                                titleTypographyProps={{ align: 'center' }}
                                subheaderTypographyProps={{
                                    align: 'center',
                                }}
                                sx={{
                                    backgroundColor: "#64B5F6"
                                }}
                            />
                            <CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'baseline',
                                        mb: 2,
                                    }}
                                >
                                    <Typography variant="h6" color="text.secondary">
                                        {props.description}
                                    </Typography>

                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'baseline',
                                    mb: 2,
                                }}>
                                    {props.children}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}