import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import cookie from 'react-cookies';

export class LoginComponent extends React.Component{
    state = {
        email: '',
        code: ''
    };

   handleEmailChange = event => {
        this.setState({ email: event.target.value});
    }

    handleCodeChange = event => {
        this.setState({ code: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
    
        axios.post(`http://localhost:5000/login`, { email: this.state.email, code: this.state.code })
          .then(res => {
            cookie.save('code', res.data.code);
            cookie.save('team', res.data._id);
            window.location.reload();
          })
      }

      render(){
        return(
            <div>
            <h3>Login:</h3>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="email">
                    Email:
                    <input type="text" name="email" onChange={this.handleEmailChange} />
                </label>
                <br/>
                <label htmlFor="code">
                    Code:
                    <input type="text" name="code" onChange={this.handleCodeChange}/>
                </label>
                <br/>
                <button type="submit">Login</button >
            </form>
            <h5>Or <Link to="/register">register</Link> with your code.</h5>
            </div>
        );
    }
}