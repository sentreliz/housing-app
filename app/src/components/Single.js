import React, { useState, useEffect, useContext } from 'react';
import StyleContext from '../views/StyleContext';
import HousingChart from './HousingChart';
import SixMonthChange from './SixMonthChange';
import { Grid, Paper, Container, Typography, AppBar, Toolbar, Link } from '@material-ui/core';
import SearchBar from './SearchBar';
import InfoBlock from './InfoBlock';
import axios from 'axios';
import StatCard from './StatCard';
import './chart.css'


// const paper = {
//     backgroundColor: "#323B47",
//     color: "white",
//     textAlign: "center",
//     padding: "1px",
//     marginBottom: "12px"

// }

const Single = ({ match }) => {
    const classes = useContext(StyleContext);
    const paper = classes.paper
    const [dataOne, setDataOne] = useState(null)

    useEffect(() => {
        const searchHousing = async () => {
            if (match.params.id) {
                const { data } = await axios.get(`https://sentreliz.com/housing/deepsearch/${match.params.id}`)

                setDataOne(data)
            }
        }
        searchHousing()
    }, []);
    if (dataOne) {
        return (
            <div>

                <Container>
                    <Container style={{ paddingBottom: "75px" }}>
                        <AppBar style={{ backgroundColor: "#323B47" }}>
                            <Toolbar>
                                <Link target="_blank" href="https://www.zillow.com/research/data/" underline="none"><Typography variant="h6" style={{ fontStyle: "italic", fontWeight: 800, color: "white" }}>Data From Zillow</Typography></Link>
                            </Toolbar>
                        </AppBar>
                    </Container>
                    <Grid container spacing={1}>
                        {/* <Container>
                        <AppBar>
                            <Toolbar>
                                <Typography variant="h6">Scroll to Hide App Bar</Typography>
                            </Toolbar>
                        </AppBar>
                    </Container> */}
                        <Grid item xs={12} md={4} >
                            <Paper className={paper}><InfoBlock data={dataOne} /></Paper>
                            <Paper className={paper}>
                                <Typography style={{ paddingBottom: "7px", paddingTop: "10px" }} variant="subtitle2" component="h3">👇 Compare housing data with a different location</Typography>
                                <SearchBar match={match} />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Paper className={paper}><HousingChart data={dataOne} match={match} /></Paper>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} >
                            <Paper className={paper} style={{ height: "130px" }}><SixMonthChange data={dataOne} /></Paper>
                        </Grid>
                        <Grid item xs={6} md={4} lg={4}>
                            <Paper className={paper}><StatCard info="Indicates the percentage change from the highest property value right before the 2007-2008 housing crisis to the lowest value before the price started to recover." data={dataOne} focusRegion="recession_drop" focusState="recession_drop_st" title="Impact" /></Paper>
                        </Grid>
                        <Grid item xs={6} md={4} lg={4}>
                            <Paper className={paper}><StatCard info="Indicates the percentage change from the highest property value right before the 2007-2008 housing crisis to the current property value." data={dataOne} focusRegion="recession_high_to_recovery" focusState="recession_high_to_recovery_st" title="Recovery Full" /></Paper>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Paper className={paper}><StatCard info="Indicates the percentage change from the lowest property value after the 2007-2008 housing crisis to the current property value." data={dataOne} focusRegion="recession_recovery" focusState="recession_recovery_st" title="Recovery High" /></Paper>
                        </Grid>

                    </Grid>
                </Container>
            </div>
        )
    }
    else {
        return <div>loading</div>
    }
}

export default Single;