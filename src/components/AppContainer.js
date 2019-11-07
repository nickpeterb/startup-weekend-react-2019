import React, {useState, useEffect} from 'react';
import {NavLink, HashRouter, Route} from 'react-router-dom';
import { UpdatesBoardComponent } from './UpdatesBoardComponent';
import MentorsComponent from './MentorsComponent';
import Cookies from 'react-cookies'
import UpdateComponent from './UpdateComponent';
import cookie from 'react-cookies';
import { ScheduleComponent } from './ScheduleComponent';


export function AppContainer(){

    return (
        <div className="container">
            <HashRouter>
                <div id='navBar'>
                    <ul>
                        <li><NavLink to="/">HomePage</NavLink></li>
                        <li><NavLink to="/mentor-signup">Mentor Signup</NavLink></li>
                        { Cookies.load('code') == "admin" &&
                            <li><NavLink to="/admin">Administrator panel</NavLink></li>
                        }
                        <li><a href="" onClick={() => {cookie.remove('code'); window.location.reload()}}>Logout</a></li>
                    </ul>
                </div>
                <Route exact path="/" component={HomePage} />
                <Route path="/mentor-signup" component={MentorsComponent} />
                { Cookies.load('code') == "admin" &&
                    <Route path="/admin" component={UpdateComponent} /> 
                }
            </HashRouter>
        </div>
    );
}

function HomePage(){
    return(
        <div id="home">
            <ScheduleComponent />
            <UpdatesBoardComponent />
        </div>
    );
}