import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Profile extends Component {
	handleClick = (event) => {
		event.preventDefault();
	};
	render() {
		return (
			<div>
				<Card style={{ width: '25rem' }}>
					users_id: {this.props.currentUser.id} <Link to="/my-profile">Edit Profile</Link>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>
							{this.props.currentUser.first_name} {this.props.currentUser.last_name}
						</Card.Title>
						<Card.Text>
							Location: {this.props.currentUser.location}
							<br />
							Interests: {this.props.currentUser.interests}
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Profile);
