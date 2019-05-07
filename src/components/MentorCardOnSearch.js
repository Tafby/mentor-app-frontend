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

	//TODO: Fix rows and cols

	render() {
		return (
			<div className="card-deck">
				<div className="card">
					<div className="card-body">
						<div className="card-title">
							{this.props.mentor.first_name} {this.props.mentor.last_name}
						</div>
						<Card.Img className="profile-pic" variant="top" src={this.props.mentor.picture} />
						<Card.Text>
							Description of Mentorship: {this.props.mentor.interests} | location:{' '}
							{this.props.mentor.location}
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
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.auth.currentUser,
	userInfo: state.userReducer.userInfo
});

export default connect(mapStateToProps, { fetchUser })(MentorCardOnSearch);
