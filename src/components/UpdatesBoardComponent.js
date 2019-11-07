import React from 'react';
import axios from 'axios';
import socketClient from 'socket.io-client'

function UpdateComponent(props){
		return(
			<h3>{props.text}</h3> 
		);
}

export class UpdatesBoardComponent extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			updates: []
		}
	}

	componentDidMount = () => {
		const socket = socketClient('http://localhost:5000');
		socket.on('update', data => {
			this.setState({updates: this.state.updates.concat(data)});
		})
		axios.get('http://localhost:5000/update')
			.then((res) => {
				console.log(res);
				this.setState({updates: res.data});
			}, (err) => {
				console.log(err);
			})
	}

    render(){
        return(
            <div id="board">
            <h2>Updates Board</h2>
			{this.state.updates.length > 0 ?
				<ul>
					{this.state.updates.map((update, index) => {
						return <UpdateComponent key={index} text={update.text}/>
					})}
				</ul> : "No updates to show"
			}
            </div>
		);
    }
}
