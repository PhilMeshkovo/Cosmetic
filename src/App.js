import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Header} from './layout/Header'
import {Main} from './components/Main'
import {Services} from './components/Services'
import {Prices} from './components/Prices'


function App() {

  return (
    <div className="app">
      <Header />
      <Router basename="/Cosmetic">
      <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/services" component={Services}/>
            <Route path="/prices" component={Prices}/>
      </Switch>

      </Router>
    </div>
  );
}

export default App;
