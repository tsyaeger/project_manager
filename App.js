import React, { Component } from 'react'
import OverviewPage from './pages/overviewPage'
import DetailsPage from './pages/detailsPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app page-wrapper">
          <Switch>
            <Route exact path="/overview" component={OverviewPage} />
            <Route exact path="/details/:id" component={DetailsPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
