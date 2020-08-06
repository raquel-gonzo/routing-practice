import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import Hello from './components/Hello';
import WordColorColor from './components/WordColorColor';
import Number from './components/Number';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path='/home'></Home>
        <Number path='/4'></Number>
        <Hello path='/hello'></Hello>
        <WordColorColor path='/hello/blue/red'></WordColorColor>
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