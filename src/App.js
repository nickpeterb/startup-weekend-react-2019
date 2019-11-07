import React from 'react';
//import {Route, HashRouter} from 'react-router-dom';
import './App.css';
import UpdateComponent from './components/UpdateComponent';
import { UpdatesBoardComponent } from './components/UpdatesBoardComponent';
import { LoginComponent } from './components/LoginComponent';
import { RegisterComponent } from './components/RegisterComponent';
import MentorsComponent from './components/MentorsComponent';
import {LoginContainer} from './components/LoginContainer.js';
import {AppContainer} from './components/AppContainer.js';
import Cookies from 'react-cookies';

const isLoggedIn = Cookies.load("code");

function App() {
  console.log(Cookies.load('code'));
  return(
  <div id="container">
    <h1>StartUP Weekend</h1>
    {!!isLoggedIn ? <AppContainer/> : <LoginContainer/>}
  </div>
  );
}

export default App;
