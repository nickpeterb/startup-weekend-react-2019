import React, { Component } from 'react'
import axios from 'axios'

export class UpdateComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            updateText: ""
        };
    }

    handleTextChange = event => {
        this.setState({updateText: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.post('http://localhost:5000/update', {
            text: this.state.updateText
        }, {withCredentials: true}).then((res) => {
            //Reset the input
            document.getElementById("updateTextInput").value = "";

            //Show success message to the user
            alert("Update created successfully.");
            console.log(res);
        }, (err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <form>
                    <h4>Create new update</h4>
                    <input id="updateTextInput" type="text" onChange={this.handleTextChange}></input>
                    <input type="submit" onClick={this.handleSubmit}></input>
                </form>
            </div>
        )
    }
}

export default UpdateComponent
