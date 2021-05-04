import React, { useState, useEffect, Link } from "react";
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import getHousingData from "../api/getHousingData";

const HousingSearch = ({ match }) => {
    const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [debouncedText, setDebouncedText] = useState(searchTerm)
    const housingTypeMapping = {
        single_family: "Single Family House",
        condo: "Condo",
        bed_1: "One Bedroom",
        bed_2: "Two Bedroom",
        bed_3: "Three Bedroom",
        bed_4: "Four Bedroom",
        bed_5: "Five Plus Bedrooms",
    }

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(searchTerm)
        }, 100);
        return () => {
            clearTimeout(timerId);
        };
    }, [searchTerm]);

    useEffect(() => {
        const searchHousing = async () => {
            const data = await axios.get(`https://sentreliz.com/housing/search/${debouncedText}`)
            setData(data.data.results)
        }
        searchHousing()
    }, [debouncedText]);

    const renderedResults = data.map((result) => {
        return (
            <Container key={result.RegionID}>

                <Grid container justify="center" spacing={3} style={{ opacity: "0.7", borderRadius: "7px", marginTop: '20px', borderWidth: "3px", borderColor: "black" }}>
                    <Grid item xs={6}>
                        <Typography variant="h6" gutterBottom style={{ marginLeft: "15px", color: "black" }}>{result.RegionName}</Typography>
                        <Typography variant="subtitle1" gutterBottom style={{ marginLeft: "15px", marginTop: "-13px", color: "black" }}>{result.state}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Button href={`/housing/focus/${result.RegionID}`} style={{ margin: '0 auto', float: "right", marginRight: "10px", marginTop: "7px", width: "110px" }} variant="contained" size="small" color="primary" >View {result.RegionType}</Button>
                    </Grid>
                </Grid>

            </Container>
        )
    })

    return (
        <Container style={{ backgroundColor: 'white', paddingTop: "18px", paddingBottom: "25px", borderRadius: "10px" }}>
            <TextField
                style={{ width: "100%", text: "white !important" }}
                id="standard-textarea"
                label="Housing Search"
                placeholder="Seattle, WA"
                multiline
                variant="outlined"
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value) }}
                inputProps={e => { console.log(e) }}
                color="white"
            />
            {renderedResults}
        </Container>
    )
}

export default HousingSearch;