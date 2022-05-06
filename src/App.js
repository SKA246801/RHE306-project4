import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import History from './components/History/History'
import Map from './components/Map/Map'

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/RHE306-project4/map'>
            <Map />
          </Route>
          <Route path='/RHE306-project4/history'>
            <History />
          </Route>
          <Route path='/RHE306-project4/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
