import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
class Mentor extends Component {
	//TODO: LINK TO MENTORSHOW PAGE -- DO I NEED TO SET UP EVENT TO FIND THE USER ID?
	render() {
		return (
			<Card style={{ width: '18rem' }}>
				<Card.Body>
					<Card.Title>
						{} {this.props.mentor.last_name}
					</Card.Title>
					<Card.Text>
						Interests:{this.props.mentor.intrests} | location: {this.props.mentor.location}
					</Card.Text>
					<Button variant="primary">View Profile</Button>
				</Card.Body>
			</Card>
		);
	}
}

export default Mentor;
