import React from "react";
import { Container, Typography, Grid, Tooltip } from '@material-ui/core';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';


const StatCard = ({ data, focusRegion, focusState, title, info }) => {
    const region = data[focusRegion];
    const state = data[focusState];
    var color = "red"
    if (region >= state) {
        color = "#b8ffb6"
    }

    return (
        <Container >
            <Tooltip title={info} >
                <Typography variant="subtitle1">Recession {title} <HelpOutlineIcon size="small" style={{ height: "18px" }} /></Typography>
            </Tooltip>
            <Grid container>
                <Grid item xs={6}>
                    <Typography style={{ color: color }}>{region}%</Typography>
                    <Typography variant="subtitle2">Region</Typography>
                </Grid >

                <Grid item xs={6}>
                    <Typography style={{ color: "#b8ffb6" }}>{state}%</Typography>
                    <Typography variant="subtitle2">State</Typography>
                </Grid >
            </Grid>
        </Container >
    )
}

export default StatCard;