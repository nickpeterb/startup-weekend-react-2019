import React, { Component } from 'react'
import axios from 'axios'
import cookie from 'react-cookies';

class TimeSlotComponent extends Component {
    constructor(props){
        super(props);

        console.log(props.timeSlot);

        this.state = {
            startingTime: props.timeSlot.startingTime,
            endingTime: props.timeSlot.endingTime,
            //Setting to true. Check with cookies later
            isLogged: !!cookie.load('code'),
            team: props.timeSlot.team
        }
    }

    handleDelete = () => {
        //Refresh padge after deleting time slot
        console.log("Deleting time slot");
        axios.delete(`http://localhost:5000/timeSlot?id=${this.props.timeSlot._id}`, {withCredentials: true}).then((res) =>{
            console.log(res);
        }, (err) => {
            console.log(err);
        })
    }

    handleRegisterForTimeSlot = () => {
        axios.get(`http://localhost:5000/signup?timeSlotId=${this.props.timeSlot._id}`, {withCredentials: true}).then((res) => {
            this.props.timeSlot.isTaken = true;
            this.setState({team: res.data});
            console.log(res);
        }, (err) => {
            console.log(err);
        })
    }

    render () {
        return(
            <div>
                <h5>{this.state.startingTime} - {this.state.endingTime}</h5>
                <h6>{this.state.team}</h6>
                {
                    this.state.isLogged && !this.props.timeSlot.isTaken &&
                    <input type="button" value="Register for time slot" onClick={this.handleRegisterForTimeSlot}></input>
                    
                }
                {
                    cookie.load('code') == 'admin' &&
                    <input type="button" value="Delete" onClick={this.handleDelete}></input>
                }
            </div>
        )
    }
}

class MentorComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            timeSlots: props.timeSlots
        }
    }

    handleAddSlot = () => {
        var startingTime = prompt("Enter starting time.");
        var endingTime = prompt("Enter ending time.");
        console.log(this.props);

        axios.post("http://localhost:5000/createTimeSlot", {startingTime: startingTime, endingTime: endingTime, mentor: this.props.name}, {withCredentials: true})
            .then((res) => {
                this.setState({timeSlots: this.state.timeSlots.concat(res.data)});
                console.log(res.data);
            }, (err) => {
                console.log(err);
            })
    }

    render () {
        return(
            <div>
                <h3>{this.props.name}</h3>
                <p>{this.props.description}</p>
                <ul>
                    {this.state.timeSlots.map((timeSlot, index) => {
                        return(
                            <li key={index}>
                                <TimeSlotComponent timeSlot={timeSlot}></TimeSlotComponent>
                            </li>
                        )
                    })}
                </ul>
                {cookie.load('code') == 'admin' &&
                    <input type="button" onClick={this.handleAddSlot} value="Add time slot"></input>
                }
            </div>
        )
    }
}


export class MentorsComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            mentors: [],
            isAdmin: true
        }
    }

    componentDidMount = () => {
        axios.get('http://localhost:5000/mentors').then((res) => {
            this.setState({mentors: res.data});
            console.log(res.data);
        }, (err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.mentors.map((mentor, index) => {
                        return(
                        <li key={index}><MentorComponent name={mentor.name} description={mentor.description} timeSlots={mentor.timeSlots} isAdmin={this.state.isAdmin}>

                        </MentorComponent></li>)
                    })}
                </ul>
            </div>
        )
    }
}

export default MentorsComponent
