import React from 'react';
import MainChart from './MainChart';
import ExampleChart from './ExampleChart';
import { Grid, Paper, Container } from '@material-ui/core';

const Single = ({ match }) => {
    const paper = {
        backgroundColor: "red",

        textAlign: "center",
        padding: "20px",

    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Paper style={paper}>title</Paper>
                    <Paper style={paper}>search</Paper>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Paper style={paper}><ExampleChart /></Paper>
                </Grid>
                <Grid item xs={6} md={3} lg={3}>
                    <Paper style={paper}>Recession recovery vs state</Paper>
                </Grid>
                <Grid item xs={6} md={3} lg={3}>
                    <Paper style={paper}>Recession Decline vs state</Paper>
                </Grid>
                <Grid item xs={6} md={3} lg={3}>
                    <Paper style={paper}>6 month growth vs state</Paper>
                </Grid>
                <Grid item xs={6} md={3} lg={3}>
                    <Paper style={paper}>Custom Metric</Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Single;