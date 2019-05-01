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

	render() {
		return (
			<ListGroup>
				{this.props.mentorships.map((mentorship) => {
					return (
						<ListGroup.Item>
							{`${mentorship.mentee.first_name} ${mentorship.mentee.last_name}`}{' '}
							{mentorship.status === 'Accepted' ? (
								<small>mentoring since {mentorship.created_at}</small>
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
	mentorships: state.mentorships.mentorships
});

export default connect(mapStateToProps, { fetchMentorships, updateMentorshipStatus })(MentorshipsDisplay);
