import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
class Mentor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false
		};
	}

	handleClick = (mentor, history) => {
		this.setState({
			redirect: true
		});
		console.log('IN BUTTON CLICK FOR MENTOR', this.props.mentor, this.props.currentUser);
		// this.props.history.push(`/mentor/${this.props.mentor.id}`);
		// return <Redirect to={`/mentor/${this.props.mentor.id}`} mentor={this.props.mentor} />;
	};

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
					<Button onClick={this.handleClick} variant="primary">
						View Profile
						{this.state.redirect ? (
							<Redirect
								to={{
									pathname: `/mentor/${this.props.mentor.id}`,
									state: { mentor: this.props.mentor, currentUser: this.props.currentUser }
								}}
							/>
						) : null}
					</Button>
				</Card.Body>
			</Card>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Mentor);
