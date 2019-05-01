import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
// import Button from 'react-bootstrap/Button';
import { fetchMentorships, updateMentorshipStatus } from '../actions/mentorshipActions';
import Button from 'react-bootstrap/Button';

class MentorshipsDisplay extends Component {
	constructor(props) {
		super(props);
		// this.props.fetchMentorships();
		// console.log('MENTORSHIPS IN MENTORSHIPS COMPONENT', this.props.mentorships);
	}

	//TODO: Create a link to the mentee's profile so the mentor can deteremine if they want to accept
	//TODO: Add a reject button that will remove the mentorship and not allow that mentee to request again
	componentDidMount() {
		this.props.fetchMentorships();
		console.log('Component MentorShips mounted');
	}
	handleClick = (mentorship_id, status) => {
		this.props.updateMentorshipStatus(mentorship_id, status);
	};

	isUser = (mentorship) => {
		if (this.props.currentUser.id === mentorship.mentee.id) {
			console.log(this.props.currentUser.id, mentorship.mentor.first_name);
			return true;
		}
		return false;
	};

	render() {
		return (
			<ListGroup>
				{this.props.mentorships.map((mentorship) => {
					let dateToUse = new Date(mentorship.created_at);
					console.log(dateToUse.toDateString());
					return (
						<ListGroup.Item>
							{this.isUser(mentorship) ? (
								`${mentorship.mentor.first_name} ${mentorship.mentor.last_name}`
							) : (
								`${mentorship.mentee.first_name} ${mentorship.mentee.last_name}`
							)}
							<br />
							{mentorship.status === 'Accepted' ? (
								<small>Mentorship started on: {dateToUse.toDateString()}</small>
							) : mentorship.status === 'Rejected' ? null : this.isUser(mentorship) ? (
								<small>Pending</small>
							) : (
								<Button onClick={() => this.handleClick(mentorship.id, 'Accepted')} size="sm">
									Accept
								</Button>
							)}
						</ListGroup.Item>
					);
				})}
			</ListGroup>
		);
	}
}

const mapStateToProps = (state) => ({
	mentorships: state.mentorships.mentorships,
	currentUser: state.auth.currentUser
});

export default connect(mapStateToProps, { fetchMentorships, updateMentorshipStatus })(MentorshipsDisplay);
