import React from 'react';

export class ScheduleComponent extends React.Component{
	state = {day : ""};

	handleFriClick = event => {
		this.setState({day : "fri"});
	}

	handleSatClick = event => {
		this.setState({day : "sat"});
	}

	handleSunClick = event => {
		this.setState({day : "sun"});
	}

	renderSched(day) {
		if(day === "fri"){
			return <FriSched/>;
		} else if (day === "sat") {
			return <SatSched/>;
		} else if(day === "sun"){
			return <SunSched/>;
		}
	}

	render() {
		return(
			<div>
			<h2>Event Schedule</h2>
			<button value="fri" onClick={this.handleFriClick}>Friday</button>
			<button value="sat" onClick={this.handleSatClick}>Saturday</button>
			<button value="sun" onClick={this.handleSunClick}>Sunday</button>
			<div id="schedContainer">
				{this.state.day === "" ?
					<FriSched/> : this.renderSched(this.state.day) 
				}
				
			</div>
			</div>
		);
	}
}



function FriSched() {
	return(
		<div id="sched">
		<ul id="fri">
			<li><p id="p1">Friday November 8th</p></li>

			<li>
			<p id="p1">6:00 pm</p>
			<p id="p2">Registration</p>
			<p id="p3">Arrive the venue and get checked in</p>
			</li>

			<li>
			<p id="p1">7:00 pm</p>
			<p id="p2">Welcome and Speakers</p>
			<p id="p3">Review agenda for the weekend and introduce speakers, coaches, and community leaders</p>
			</li>

			<li>
			<p id="p1">7:15 pm</p>
			<p id="p2">Pitches Start</p>
			<p id="p3">Optionally line up to give your pitch</p>
			</li>

			<li>
			<p id="p1">7:45 pm</p>
			<p id="p2">Voting</p>
			<p id="p3">Attendees vote for lie top pitches</p>
			</li>

			<li>
			<p id="p1">8:00 pm</p>
			<p id="p2">Form Teams</p>
			<p id="p3"></p>
			</li>

			<li>
			<p id="p1">8:30 pm</p>
			<p id="p2">Dinner and Networking</p>
			<p id="p3">Eat food, share ideas, practice pitches, get to know fellow participants</p>
			</li>

			<li>
			<p id="p1">9:00 pm</p>
			<p id="p2">Begin Work</p>
			<p id="p3">Start to formalize teams and take an inventory of skills. Be honest, and direct about what resources and skills are needed for lie weekend. You may stay and work as late as lie venue will allow</p>
			</li>

		</ul>
		</div>
	);
}

function SatSched(){
	return(
		<div id="sched">
		<ul id="sat">
			<li><p id="p1">Saturday November 9th</p></li>

			<li>
			<p id="p1">9:00 am</p>
			<p id="p2">Breakfast</p>
			<p id="p3">Arrive, simple breakfast and coffee</p>
			</li>

			<li>
			<p id="p1">9:30 am</p>
			<p id="p2">Begin Work</p>
			<p id="p3">Teams formed and setting up workspace for lie weekend</p>
			</li>

			<li>
			<p id="p1">12:00 pm</p>
			<p id="p2">Mentor sign-ups start</p>
			<p id="p3">First come, first serve basis.</p>
			</li>

			<li>
			<p id="p1">12:30 pm</p>
			<p id="p2">Check-In</p>
			<p id="p3">After-lunch check-in, status reports, call for help</p>
			<p id="p3">(Mentor sign-ups end)</p>
			</li>

			<li>
			<p id="p1">1:00pm</p>
			<p id="p2">Lunch</p>
			</li>

			<li>
			<p id="p1">2:00 pm</p>
			<p id="p2">Coach Meetings</p>
			<p id="p3">Coaches help teams one-on-one. They are here to help!</p>
			</li>

			<li>
			<p id="p1">7:00 pm</p>
			<p id="p2">Check-In</p>
			<p id="p3">After-dinner check-in, status reports, call for help</p>
			</li>

			<li>
			<p id="p1">8:00 pm</p>
			<p id="p2"></p>
			<p id="p3">Dinner</p>
			</li>

			<li>
			<p id="p1">10:00 pm</p>
			<p id="p2">Wrap-Up</p>
			<p id="p3">Finished for the day. You may stay and work as late as the venue will allow</p>
			</li>
		</ul>
		</div>
	);
}

function SunSched(){
	return(
		<div id="sched">
		<ul id="sun">
			<li><p id="p1">Sunday November 10th</p></li>
			
			<li>
			<p id="p1">9:00 am</p>
			<p id="p2">Breakfast</p>
			<p id="p3">Arrive, simple breakfast and coffee</p>
			</li>

			<li>
			<p id="p1">9:30 am</p>
			<p id="p2">Mentor sign-ups</p>
			<p id="p3">First come, first serve basis.</p>
			</li>

			<li>
			<p id="p1">9:55 am</p>
			<p id="p2"></p>
			<p id="p3">Mentor sign-ups end</p>
			</li>

			<li>
			<p id="p1">10:00 am</p>
			<p id="p2">Coach Meetings</p>
			<p id="p3">Coaches arrive. Final opportunity to ask questions</p>
			</li>

			<li>
			<p id="p1">1:00 pm</p>
			<p id="p2"></p>
			<p id="p3">Lunch</p>
			</li>

			<li>
			<p id="p1">1:30 pm</p>
			<p id="p2">Check-In</p>
			<p id="p3">After-lunch check-in, status reports, call for help</p>
			</li>

			<li>
			<p id="p1">1:45 pm</p>
			<p id="p2">Mock presentations sign-ups.</p>
			<p id="p3">First come, first serve basis.</p>
			</li>

			<li>
			<p id="p1">2:30 pm</p>
			<p id="p2"></p>
			<p id="p3">Mock presentations sign-ups end</p>
			</li>

			<li>
			<p id="p1">3:00 pm</p>
			<p id="p2">Presentation Prep and Tech Check</p>
			<p id="p3">Final hours of worktime should be focused on perfecting your presentation, tech-check for final presentations also takes place</p>
			</li>

			<li>
			<p id="p1">5:00 pm</p>
			<p id="p2"></p>
			<p id="p3">Deadline for submitting presentations</p>
			</li>

			<li>
			<p id="p1">5:30 pm</p>
			<p id="p2"></p>
			<p id="p3">Final Presentations</p>
			</li>

			<li>
			<p id="p1">8:00 pm</p>
			<p id="p2"></p>
			<p id="p3">Judging and Awards</p>
			</li>

			<li>
			<p id="p1">8:30 pm</p>
			<p id="p2"></p>
			<p id="p3">Cocktail</p>
			</li>

			<li>
			<p id="p1">9:00 pm</p>
			<p id="p2"></p>
			<p id="p3">Go Home!</p>
			</li>
		</ul>
		</div>
	);
}

