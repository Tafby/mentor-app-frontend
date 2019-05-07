import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class MentorCardOnSearch extends Component {
	handleClick = (id) => {
		this.props.fetchUser(id);
	};

	mentorProfileInfo = () => {
		if (this.props.mentor.mentor_profiles > 0) {
			this.props.mentor.mentor_profiles.map((mentorProfile) => {
				console.log('category names', mentorProfile.category.name);
				return mentorProfile.category.name;
			});
		}
	};
	render() {
		return (
			<Container>
				<Card>
					<Card.Body>
						<Row />
						<Row>
							<Col>
								<Card.Title>
									{this.props.mentor.first_name} {this.props.mentor.last_name}
								</Card.Title>
								<Card.Img className="profile-pic" variant="top" src={this.props.mentor.picture} />
							</Col>
							<Col>
								<Card.Text>
									<b>Description of Mentorship:</b> {this.props.mentor.interests}
								</Card.Text>
								<Card.Text>
									<b>Location:</b> {this.props.mentor.location}
								</Card.Text>
								<Card.Text>
									<b>Numer of Days They can Typically Meet:</b>{' '}
									{this.props.mentor.mentor_profiles[0].days_can_meet}
								</Card.Text>
								<Card.Text>
									<b>Years Mentoring:</b> {this.props.mentor.mentor_profiles[0].years_mentoring}
								</Card.Text>
							</Col>
							<Col />
						</Row>
						<Row>
							<Col>
								<Link to={`profile/${this.props.mentor.id}`}>
									<Button
										style={{ backgroundColor: 'lightblue', color: 'white', textAlign: 'center' }}
										variant="flat"
										onClick={() => this.handleClick(this.props.mentor.id)}
									>
										View Profile
									</Button>
								</Link>
							</Col>

							<Col>
								<small>Also mentors in {this.mentorProfileInfo()}</small>
							</Col>
							<Col />
						</Row>
					</Card.Body>
				</Card>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.auth.currentUser,
	userInfo: state.userReducer.userInfo
});

export default connect(mapStateToProps, { fetchUser })(MentorCardOnSearch);
