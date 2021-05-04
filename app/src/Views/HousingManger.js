import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Double from '../components/Double';
import Single from '../components/Single';
import HomeSearch from './HomeSearch';
import HousingContext from './HousingContext';

const HousingManager = () => {
    const [housingData, setHousingData] = useState({})
    return (
        <Router>
            <Switch>
                <HousingContext.Provider value={{ housingData, setHousingData }}>
                    <Route path="/housing" exact component={HomeSearch} />
                    <Route path="/housing/focus/:id" exact component={Single} />
                    <Route path="/housing/focus/:idone/:idtwo" component={Double} />
                </HousingContext.Provider>
            </Switch>
        </Router>
    )
}

export default HousingManager;