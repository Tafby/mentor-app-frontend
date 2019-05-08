import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { fetchUser } from '../actions/userActions';
import { requestMentorship } from '../actions/mentorshipActions';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import toaster from 'toasted-notes';
import MentorshipsDisplay from '../components/MentorshipsDisplay';
//TODO: SHOW ONLY USERS MENTORSHIPS. FINISH SEARCH BAR. MAKE IT SO NEW CHAT IS RENDERED WHEN MENTORSHIP IS ACCEPTED
class ProfilePage extends Component {
	componentDidMount() {
		return this.props.fetchUser(this.props.match.params.id);
	}

	handleClick = () => {
		toaster.notify('Mentorship Requested!', {
			duration: 2000
		});
		return this.props.requestMentorship(this.props.user.id);
	};

	isUser() {
		console.log(this.props.currentUser);
		if (this.props.currentUser.id === this.props.user.id) {
			return true;
		}
		return false;
	}

	// isUserMentorships() {
	// 	let msArray = [];
	// 	if (this.props.currentUser.id === this.props.user.id) {
	// 		this.props.currentUser.mentorships.forEach((m) => {
	// 			console.log('m', m);
	// 			msArray.push(m);
	// 		});
	// 	}
	// }

	render() {
		return (
			<Card className="mentor-card">
				<Card.Body>
					<Row>
						{this.isUser() ? <Link to="/edit-profile">Edit Profile</Link> : null}
						<Col>
							<h3>
								{this.props.user.first_name} {this.props.user.last_name}
							</h3>
							<Card.Img className="profile-pic" variant="top" src={this.props.user.picture} />
							{this.isUser() ? null : (
								<Button
									className="request-mentorship-button"
									variant="info"
									onClick={this.handleClick}
									variant="primary"
								>
									Request Mentorship
								</Button>
							)}
						</Col>
						<Col>
							<Card.Text>
								<b>Location</b> {this.props.user.location}
							</Card.Text>
							<br />
							<Card.Text>
								<b>About Me</b> <p>{this.props.user.interests}</p>
							</Card.Text>
							<Card.Text>
								<b>LinkedIn</b> <p>MyLinkedIn</p>
							</Card.Text>
						</Col>
						<Col />
					</Row>
				</Card.Body>
				<Row>
					<Col>{this.isUser() ? <MentorshipsDisplay /> : null}</Col>
				</Row>
			</Card>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.auth.currentUser,
	user: state.userReducer.userInfo
});

export default connect(mapStateToProps, { fetchUser, requestMentorship })(ProfilePage);
