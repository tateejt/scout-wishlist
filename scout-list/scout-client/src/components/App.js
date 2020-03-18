import React from 'react';
import '../css/App.css';
import Main from './Home';
import Info from './Info';
import Players from '../containers/Players';
import PlayerForm from '../containers/PlayerForm';
import NoteForm from '../containers/NoteForm';
import Notes from '../containers/Notes';
import Navbar from './Navbar';
import Teams from './Teams';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
       <div className="App">
         <div className="container-fluid" id="app">
            <Navbar/>

            <Switch>
              <Route exact path='/' component={Main} />
              <Route exact path='/players' component={Players} />
              <Route exact path='/player/new' component={PlayerForm} />
              <Route exact path='/note/new' component={NoteForm} />
              <Route exact path='/notes' component={Notes} />
              <Route exact path='/info' component={Info} />
              <Route exact path='/teams' component={Teams}/>
            </Switch>
         </div>
      </div>
  );
}

export default App;
