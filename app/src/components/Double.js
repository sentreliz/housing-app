import React, { useState, useEffect, useContext } from 'react';
import StyleContext from '../views/StyleContext';
import HousingChart from './HousingChart';
import SixMonthChange from './SixMonthChange';
import { Grid, Paper, Container, Typography, AppBar, Toolbar, Link } from '@material-ui/core';
import InfoBlock from './InfoBlock';
import axios from 'axios';
import StatCard from './StatCard';
import './chart.css'



const Double = ({ match }) => {
    const classes = useContext(StyleContext);
    const paper = classes.paper
    const [dataOne, setDataOne] = useState(null)
    const [dataTwo, setDataTwo] = useState(null)

    useEffect(() => {
        const searchHousing = async () => {
            const { data } = await axios.get(`https://sentreliz.com/housing/deepsearch/${match.params.id}`)

            setDataOne(data)
        }
        const searchHousingtwo = async () => {
            const { data } = await axios.get(`https://sentreliz.com/housing/deepsearch/${match.params.idtwo}`)

            setDataTwo(data)
        }
        searchHousing()
        searchHousingtwo()
        // searchHousing(match.params.two)
    }, []);
    if (dataOne && dataTwo) {
        return (
            <Container>
                <Container style={{ paddingBottom: "75px" }}>
                    <AppBar style={{ backgroundColor: "#323B47" }}>
                        <Toolbar>
                            <Link target="_blank" href="https://www.zillow.com/research/data/" underline="none"><Typography variant="h6" style={{ fontStyle: "italic", fontWeight: 800, color: "white" }}>Data From Zillow</Typography></Link>
                        </Toolbar>
                    </AppBar>
                </Container>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Paper className={paper}><InfoBlock data={dataTwo} double={true} loc={match.params.id} /></Paper>
                                <Paper className={paper}><HousingChart data={dataTwo} match={match} /></Paper>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} >
                                <Paper className={paper} style={{ height: "130px" }}><SixMonthChange data={dataTwo} /></Paper>
                            </Grid>
                            <Grid item xs={6} md={4} lg={4}>
                                <Paper className={paper}><StatCard data={dataTwo} focusRegion="recession_drop" focusState="recession_drop_st" title="Impact" info="Indicates the percentage change from the highest property value right before the 2007-2008 housing crisis to the lowest value before the price started to recover." /></Paper>
                            </Grid>
                            <Grid item xs={6} md={4} lg={4}>
                                <Paper className={paper}><StatCard data={dataTwo} focusRegion="recession_high_to_recovery" focusState="recession_high_to_recovery_st" title="Recovery Full" info="Indicates the percentage change from the highest property value right before the 2007-2008 housing crisis to the current property value." /></Paper>
                            </Grid>
                            <Grid item xs={12} md={4} lg={4}>
                                <Paper className={paper}><StatCard data={dataTwo} focusRegion="recession_recovery" focusState="recession_recovery_st" title="Recover High" info="Indicates the percentage change from the highest property value right before the 2007-2008 housing crisis to the lowest value before the price started to recover." /></Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Paper className={paper}><InfoBlock data={dataOne} double={true} loc={match.params.idtwo} /></Paper>
                                <Paper className={paper}><HousingChart data={dataOne} match={match} /></Paper>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} >
                                <Paper className={paper} style={{ height: "130px" }}><SixMonthChange data={dataOne} /></Paper>
                            </Grid>
                            <Grid item xs={6} md={4} lg={4}>
                                <Paper className={paper}><StatCard data={dataOne} focusRegion="recession_drop" focusState="recession_drop_st" title="Impact" info="Indicates the percentage change from the highest property value right before the 2007-2008 housing crisis to the lowest value before the price started to recover." /></Paper>
                            </Grid>
                            <Grid item xs={6} md={4} lg={4}>
                                <Paper className={paper}><StatCard data={dataOne} focusRegion="recession_high_to_recovery" focusState="recession_high_to_recovery_st" title="Recovery Full" info="Indicates the percentage change from the highest property value right before the 2007-2008 housing crisis to the current property value." /></Paper>
                            </Grid>
                            <Grid item xs={12} md={4} lg={4}>
                                <Paper className={paper}><StatCard data={dataOne} focusRegion="recession_recovery" focusState="recession_recovery_st" title="Recover High" info="Indicates the percentage change from the highest property value right before the 2007-2008 housing crisis to the lowest value before the price started to recover." /></Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        )
    }
    else {
        return <div>loading</div>
    }
}

export default Double;