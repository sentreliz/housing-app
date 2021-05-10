import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Typography, Grid, IconButton } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { withStyles } from "@material-ui/core/styles";


const CustomColorIconButton = withStyles({
    root: {
        color: "#b8ffb6"
    }
})(IconButton);

const InfoBlock = ({ data, double, loc }) => {
    let history = useHistory();
    const [region, setRegion] = useState(null);
    const [rstate, setRState] = useState(null);
    const [rtype, setrtype] = useState(null);

    useEffect(() => {
        setRegion(data.regionName);
        setRState(data.regionState);
        setrtype(data.regionType);
    }, []);
    if (double) {
        return (
            <Container style={{ textAlign: "left", marginTop: "5px", marginBottom: "5px" }}>
                <Grid container spacing={0}>
                    <Grid item xs={11} md={11}>
                        <Typography variant="h5" component="h3">{region}</Typography>
                        <Typography variant="subtitle1" component="h3">Region Type: {rtype} located in {rstate}</Typography>
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <CustomColorIconButton size="medium" onClick={() => history.push(`/housing/${loc}`)}>
                            <HighlightOffIcon />
                        </CustomColorIconButton>

                    </Grid>
                </Grid>
            </Container>
        )
    }
    else {
        return (
            <Container style={{ textAlign: "left", marginTop: "5px", marginBottom: "5px" }}>
                <Grid container spacing={0}>
                    <Grid item xs={11} md={11}>
                        <Typography variant="h5" component="h3">{region}</Typography>
                        <Typography variant="subtitle1" component="h3">Region Type: {rtype} located in {rstate}</Typography>
                    </Grid>
                    <Grid item xs={1} md={1}>


                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default InfoBlock;