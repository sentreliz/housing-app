import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HousingManager from './views/HousingManger';
import Home from './views/Home';
import HousingSearch from './components/HousingSearch';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/housing" component={HousingManager} />
          <Route path="/test" component={HousingSearch} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
