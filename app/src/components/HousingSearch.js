import React from "react";
import { Container } from '@material-ui/core';
import SearchBar from './SearchBar';


const HousingSearch = () => {
    return (
        <Container style={{ backgroundColor: "white", paddingTop: "18px", paddingBottom: "25px", borderRadius: "10px" }}>
            <SearchBar match={null} />
        </Container>
    )
}

export default HousingSearch;