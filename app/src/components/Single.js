import React, { useState, useEffect, useContext } from 'react';
import MainChart from './MainChart';
import ExampleChart from './ExampleChart';
import ExampleReal from './ExampleReal';
import { Grid, Paper, Container } from '@material-ui/core';

const paper = {
    backgroundColor: "white",
    textAlign: "center",
    padding: "1px",

}

const Single = ({ match }) => {
    // const [requestData, setRequestData] = useState({})
    // const [chartData, setChartData] = useState([])

    // useEffect(() => {
    //     const searchHousing = async () => {
    //         const { data } = await axios.get(`https://sentreliz.com/housing/city/${match.params.id}`)
    //         setRequestData(data.message)
    //         const keys = Object.keys(data.message[0].pricing)
    //         setChartKeys(keys)
    //     }
    //     searchHousing()
    // }, []);

    // useEffect(() => {
    //     const dataHolder = []
    //     dataOne.map((obj) => {
    //         const holder = {
    //             label: housingTypeMapping[obj.HouseType],
    //             data: Object.values(obj.pricing),
    //             fill: true
    //         }
    //         dataHolder.push(holder)
    //     })
    // }, [requestData])

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Paper style={paper}>title</Paper>
                    <Paper style={paper}>search</Paper>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Paper style={paper}><ExampleReal match={match} /></Paper>
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