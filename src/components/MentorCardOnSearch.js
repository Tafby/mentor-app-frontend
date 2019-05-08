import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class MentorCardOnSearch extends Component {
	handleClick = (id) => {
		this.props.fetchUser(id);
	};

	multipleMentorProfiles = () => {
		if (this.props.mentor.mentor_profiles > 1) {
			return true;
		} else {
			return false;
		}
	};

	render() {
		return (
			<Card className="mentor-card">
				<Card.Body>
					<Row>
						<Col>
							<h3>
								{this.props.mentor.first_name} {this.props.mentor.last_name}
							</h3>
							<Card.Img className="profile-pic" variant="top" src={this.props.mentor.picture} />
							<Link to={`profile/${this.props.mentor.id}`}>
								<Button
									className="view-profile-button"
									onClick={() => this.handleClick(this.props.mentor.id)}
								>
									View Profile
								</Button>
							</Link>
						</Col>
						<Col>
							<Card.Text>
								<b>Category</b> <p>{this.props.mentor.mentor_profiles[0].category.name}</p>
							</Card.Text>
							<Card.Text>
								<b>Description</b> <p>{this.props.mentor.mentor_profiles[0].description}</p>
							</Card.Text>
							<Card.Text>
								<b>Location</b> {this.props.mentor.location}
							</Card.Text>
							<Card.Text>
								<b>Availability</b> <p>{this.props.mentor.mentor_profiles[0].days_can_meet}</p>
							</Card.Text>
							<Card.Text>
								<b>Years Mentoring</b> <p>{this.props.mentor.mentor_profiles[0].years_mentoring}</p>
							</Card.Text>
							<small>
								Also mentors in: {' '}
								{this.multipleMentorProfiles ? (
									this.props.mentor.mentor_profiles.map((mentorProfile) => {
										return <small>{mentorProfile.category.name}, </small>;
									})
								) : null}
							</small>
						</Col>
						<Col />
					</Row>
				</Card.Body>
			</Card>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.auth.currentUser,
	userInfo: state.userReducer.userInfo
});

export default connect(mapStateToProps, { fetchUser })(MentorCardOnSearch);
