import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home';
import Teams from './Teams';
import Players from './Players';
import Navbar from './Navbar';
import TeamPage from './TeamPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/teams' component={Teams} />
          <Route path='/players' component={Players} />
          <Route path='/:teamId' component={TeamPage} />
          <Route render={() => <h1 className='text-center'>Four oh Four.</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
