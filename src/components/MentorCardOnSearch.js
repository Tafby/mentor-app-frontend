import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class MentorCardOnSearch extends Component {
	render() {
		return (
			<Card style={{ width: '20rem' }}>
				<Card.Body>
					<Card.Title>
						{this.props.mentor.first_name} {this.props.mentor.last_name}
					</Card.Title>
					<Card.Text>
						Interests: {this.props.mentor.interests} | location: {this.props.mentor.location}
					</Card.Text>
					<Link to={`profile/${this.props.mentor.id}`}>
						<Button>View Profile</Button>
					</Link>
				</Card.Body>
			</Card>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(MentorCardOnSearch);