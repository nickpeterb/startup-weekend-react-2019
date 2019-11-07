import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import cookie from 'react-cookies';

export class RegisterComponent extends React.Component {
    state = {
        email: '',
        code: '',
        teamName: '',
        members: ''
    }

    handleEmailChange = event => {
        this.setState({ email: event.target.value, });
    }

    handleCodeChange = event => {
        this.setState({ code: event.target.value, });
    }

    handleTeamNameChange = event => {
        this.setState({ teamName: event.target.value, });
    }

    handleMembersChange = event => {
        this.setState({ members: event.target.value, });
    }
    
    handleSubmit = event => {
        event.preventDefault();

        var members = [];
        members = this.state.members.split(",");
        
        axios.post(`http://localhost:5000/register`,
            {email: this.state.email, code: this.state.code, teamName: this.state.name, members: members})
          .then(res => {
            //console.log(res);
            cookie.save('code', res.data.code);
            cookie.save('team', res.data.name);
            window.location.reload();
            console.log(res.data);
          }, (err) => {
              //Handle error
              console.log(err);
          })
    }

    render(){
        return(
            <div>
            <h3>Register:</h3>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="email">
                    Email: 
                    <input type="text" id="email" name="email" onChange={this.handleEmailChange} />
                </label>
                <br/>
                <label htmlFor="code">
                    Code: 
                    <input type="text" id="code" name="code" onChange={this.handleCodeChange}/>
                </label>
                <br/>
                <label htmlFor="teamName">
                    Team Name: 
                    <input type="text" name="teamName" onChange={this.handleTeamNameChange}/>
                </label>
                <br/>
                <label htmlFor="members">
                    Members: 
                    <textarea type="textarea" name="members" onChange={this.handleMembersChange}/>
                </label>
                <br/>
                <button type="submit">Register</button >
            </form>
            <h5>Already registered? <Link to="/">Login</Link></h5>
            </div>
        );
    }
}