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

class MentorCardOnSearch extends Component {
	handleClick = (id) => {
		this.props.fetchUser(id);
	};

	render() {
		return (
			<Row>
				<Col />
				<Col>
					<CardGroup style={{ fontFamily: 'Montserrat', width: '40rem', margin: '5px', textAlign: 'center' }}>
						<Card>
							<Card.Body>
								<Card.Title>
									{this.props.mentor.first_name} {this.props.mentor.last_name}
								</Card.Title>
								<Card.Text>
									Interests: {this.props.mentor.interests} | location: {this.props.mentor.location}
								</Card.Text>
								<Link to={`profile/${this.props.mentor.id}`}>
									<Button
										style={{ backgroundColor: 'lightblue', color: 'white', textAlign: 'center' }}
										variant="flat"
										onClick={() => this.handleClick(this.props.mentor.id)}
									>
										View Profile
									</Button>
								</Link>
							</Card.Body>
						</Card>
					</CardGroup>
				</Col>
				<Col />
			</Row>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.auth.currentUser,
	userInfo: state.userReducer.userInfo
});

export default connect(mapStateToProps, { fetchUser })(MentorCardOnSearch);
