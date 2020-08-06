import React from 'react';
import './App.css';
import { Router, Redirect } from '@reach/router';
import Home from './components/Home';
import WordColorColor from './components/WordColorColor';
import NumOrWord from './components/NumOrWord';

function App() {
  return (
    <div className="App">
      <Router>
        {/* noThrow prevents error from being thrown by react */}
        <Redirect noThrow exact from="/" to="/home"></Redirect>
        <Home path='/home'></Home>
        <NumOrWord path='/:id'></NumOrWord>
        <WordColorColor path='/:word/:textColor/:backgroundColor'></WordColorColor>
      </Router>
    </div>
  );
}

export default App;

// 1) cd routing-practice and run npm install @reach/router (is added to project's dependencies list).
// 2) in App.js, import {Router} from '@reach/router'
// 3) in function App(), create a <Router> </Router> tag to house component paths(path prop). For example: <LoginComponent path="/login"/>
// 4) In the components, set up linking to other pages. import { Link } from '@reach/router'. Return something like: <Link to = "/dashboard">Dashboard</Link>
// 5) 