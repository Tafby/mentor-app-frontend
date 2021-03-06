import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import { fetchMentorships, updateMentorshipStatus } from '../actions/mentorshipActions';
import Button from 'react-bootstrap/Button';
import toaster from 'toasted-notes';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class MentorshipsDisplay extends Component {
	//TODO: Create a link to the mentee's profile so the mentor can deteremine if they want to accept
	componentDidMount() {
		this.props.fetchMentorships();
	}
	handleClick = (mentorship_id, status) => {
		this.props.updateMentorshipStatus(mentorship_id, status);
		toaster.notify(`Mentorship ${status}!`, {
			duration: 2000
		});
	};

	isUser = (mentorship) => {
		if (this.props.currentUser.id === mentorship.mentee.id) {
			return true;
		}
		return false;
	};

	render() {
		return (
			<ListGroup>
				<h4 className="mentorships-title">My Mentorships</h4>
				{this.props.mentorships.map((mentorship) => {
					let dateToUse = new Date(mentorship.created_at);
					return (
						<ListGroup.Item>
							Your Mentorship With: {' '}
							{this.isUser(mentorship) ? (
								`${mentorship.mentor.first_name} ${mentorship.mentor.last_name}`
							) : (
								`${mentorship.mentee.first_name} ${mentorship.mentee.last_name}`
							)}
							<br />
							<br />
							<p>Cateogry: {mentorship.category.name}</p>
							{mentorship.status === 'Accepted' ? (
								<small>Mentorship started on: {dateToUse.toDateString()}</small>
							) : mentorship.status === 'Rejected' ? null : this.isUser(mentorship) ? (
								<small>Pending</small>
							) : (
								<div>
									<Button onClick={() => this.handleClick(mentorship.id, 'Accepted')} size="sm">
										Accept
									</Button>{' '}
									<Button onClick={() => this.handleClick(mentorship.id, 'Rejected')} size="sm">
										Reject
									</Button>
								</div>
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
