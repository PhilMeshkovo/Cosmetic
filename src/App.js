import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Header} from './layout/Header'
import {Main} from './components/Main'
import {Sights} from './components/Sights'
import {History} from './components/History'


function App() {

  return (
    <div className="app">
      <Header />
      <Router basename="/Cosmetic">
      <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/sights" component={Sights}/>
            <Route path="/history" component={History}/>
      </Switch>

      </Router>
    </div>
  );
}

export default App;
