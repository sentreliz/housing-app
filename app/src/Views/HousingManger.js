import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Double from '../components/Double';
import Single from '../components/Single';
import HomeSearch from './HomeSearch';
import StyleContext from './StyleContext';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    paper: {
        backgroundColor: "#323B47",
        color: "white",
        textAlign: "center",
        padding: "1px",
        marginBottom: "12px"

    },
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "green"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "red"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "purple"
        }
    }
})


const HousingManager = () => {
    const classes = useStyles();
    return (
        <Router>
            <Switch>
                <StyleContext.Provider value={classes} >
                    <Route path="/housing" exact component={HomeSearch} />
                    <Route path="/housing/:id" exact component={Single} />
                    <Route path="/housing/:id/:idtwo" component={Double} />
                </StyleContext.Provider>
            </Switch>
        </Router>
    )
}

export default HousingManager;