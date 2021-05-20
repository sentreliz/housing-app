import React, { useState, useEffect } from "react";
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const SearchBar = ({ match }) => {
    const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [debouncedText, setDebouncedText] = useState(searchTerm)
    const [searchPath, setSearchPath] = useState("/housing")
    const [pathLength, setPathLength] = useState(0);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(searchTerm)
        }, 100);
        return () => {
            clearTimeout(timerId);
        };
    }, [searchTerm]);

    useEffect(()=> {
        let tempPathLength = window.location.pathname.split('/').filter((x) => x.length!==0).length;
        setPathLength(tempPathLength);
    }, [])

    useEffect(() => {
        const searchHousing = async () => {
            const data = await axios.get(`https://sentreliz.com/housing/search/${debouncedText}`)
            setData(data.data.results)
        }
        searchHousing()
    }, [debouncedText]);

    useEffect(() => {
        if (match) {
            setSearchPath(match.url)
        }
    }, [])
    const renderedResults = data.map((result) => {
        return (
            <Container key={result.RegionID}>

                <Grid container justify="center" spacing={3} style={{ opacity: "0.7", borderRadius: "7px", marginTop: '10px', borderWidth: "3px", borderColor: "black" }}>
                    <Grid item xs={6}>
                        <Typography variant="h6" gutterBottom style={{ marginLeft: "1px" }}>{result.RegionName}</Typography>
                        <Typography variant="subtitle1" gutterBottom style={{ marginLeft: "5px", marginTop: "-13px" }}>{result.state}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Button href={`${searchPath}/${result.RegionID}`} style={{ margin: '0 auto', float: "right", marginRight: "5px", marginTop: "7px", width: "95px", backgroundColor: "#b8ffb6" }} variant="contained" size="small" >View {result.RegionType}</Button>
                    </Grid>
                </Grid>

            </Container>
        )
    })

    return (
        <Container>
            <TextField
                style={{ width: "100%", paddingBottom: "3px", borderColor: "white", paddingBottom: "10px" }}
                id="standard-textarea"
                label="Housing Search"
                placeholder="Seattle, WA"
                variant="outlined"
                value={searchTerm}
                InputLabelProps={{
                    style: pathLength > 1 ? { color: '#fff' } : {color: '#000'}
                }}
                onChange={(e) => { setSearchTerm(e.target.value) }}
            />
            {renderedResults}
        </Container>
    )
}

export default SearchBar;