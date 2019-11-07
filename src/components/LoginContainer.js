import React from 'react';
import {Route, HashRouter} from 'react-router-dom';
import {LoginComponent} from './LoginComponent.js';
import { RegisterComponent } from './RegisterComponent';

export function LoginContainer(){
    return (
        <HashRouter>
            <h2>Welcome!</h2>
            <Route exact path="/" component={LoginComponent} />
            <Route path="/register" component={RegisterComponent} />
        </HashRouter>
    );
}