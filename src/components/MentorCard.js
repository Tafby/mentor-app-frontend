import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { BrowserRouter as Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { requestMentorship } from '../actions/mentorshipActions';

class MentorCard extends Component {
	handleClick = () => {
		console.log(
			'IN MENTOR CARD',
			this.props.location.state.mentor.id,
			'CURRENT USER',
			this.props.location.state.currentUser.id
		);
		return this.props.requestMentorship(
			this.props.location.state.mentor.id,
			this.props.location.state.currentUser.id
		);
	};
	render() {
		return (
			<div>
				<Card style={{ width: '25rem' }}>
					users_id: {this.props.location.state.mentor.id}
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>
							{this.props.location.state.mentor.first_name} {this.props.location.state.mentor.last_name}
						</Card.Title>
						<Card.Text>
							Location: {this.props.location.state.mentor.location}
							<br />
							Interests: {this.props.location.state.mentor.interests}
						</Card.Text>
						<Button onClick={this.handleClick} variant="primary">
							Request Mentorship
						</Button>
					</Card.Body>
				</Card>
			</div>
		);
	}
}

export default connect(null, { requestMentorship })(MentorCard);
