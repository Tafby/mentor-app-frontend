import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { fetchUser } from '../actions/userActions';
import { requestMentorship } from '../actions/mentorshipActions';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ProfilePage extends Component {
	componentDidMount() {
		return this.props.fetchUser(this.props.match.params.id);
	}

	handleClick = () => {
		console.log('IN MENTOR CARD', this.props.user.id, 'CURRENT USER', this.props.currentUser.id);
		return this.props.requestMentorship(this.props.user.id);
	};

	isUser() {
		console.log(this.props.currentUser);

		if (this.props.currentUser.id === this.props.user.id) {
			return true;
		}
		return false;
	}

	// isPending = (mentorship) => {
	// 	if (mentorship.status === 'Pending') {
	// 		return true;
	// 	}
	// };
	render() {
		return (
			<div>
				<Row>
					<Col />
					<Col>
						<Card border="info" style={{ width: '30rem' }}>
							{this.isUser() ? <Link to="/edit-profile">Edit Profile</Link> : null}
							{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
							<Card.Body>
								<Card.Title style={{ textAlign: 'center' }}>
									{this.props.user.first_name} {this.props.user.last_name}
								</Card.Title>
								<Card.Text style={{ textAlign: 'center' }}>
									Location: {this.props.user.location}
									<br />
									About Me: {this.props.user.interests}
								</Card.Text>
								{this.isUser() ? null : (
									<Button onClick={this.handleClick} variant="primary">
										Request Mentorship
									</Button>
								)}
							</Card.Body>
						</Card>
					</Col>
					<Col />
				</Row>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.auth.currentUser,
	user: state.userReducer.userInfo
});

export default connect(mapStateToProps, { fetchUser, requestMentorship })(ProfilePage);
