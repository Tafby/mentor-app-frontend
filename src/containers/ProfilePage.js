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

class ProfilePage extends Component {
	componentDidMount() {
		return this.props.fetchUser(this.props.match.params.id);
	}

	handleClick = () => {
		console.log('IN MENTOR CARD', this.props.user.id, 'CURRENT USER', this.props.currentUser.id);
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

	render() {
		return (
			<div className="profile-div">
				<Row>
					<Col />
					<Col>
						<Card border="info" className="my-profile-pic">
							{this.isUser() ? <Link to="/edit-profile">Edit Profile</Link> : null}
							<Card.Img className="profile-pic" variant="top" src={this.props.user.picture} />
							<Card.Body>
								<Card>
									<Card.Title style={{ textAlign: 'center' }}>
										{this.props.user.first_name} {this.props.user.last_name}
									</Card.Title>
									<Card.Text style={{ textAlign: 'center' }}>
										Location: {this.props.user.location}
										<br />
										About Me: {this.props.user.interests}
									</Card.Text>
								</Card>
								<br />
								{this.isUser() ? null : (
									<Button
										variant="info"
										className="button-center"
										onClick={this.handleClick}
										variant="primary"
									>
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
