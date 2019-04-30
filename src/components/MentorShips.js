import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
// import Button from 'react-bootstrap/Button';
import { fetchMentorships } from '../actions/mentorshipActions';
import Button from 'react-bootstrap/Button';

class MentorShips extends Component {
	constructor(props) {
		super(props);
		// this.props.fetchMentorships();
		// console.log('MENTORSHIPS IN MENTORSHIPS COMPONENT', this.props.mentorships);
	}

	componentDidMount() {
		this.props.fetchMentorships();
		console.log('Component MentorShips mounted');
	}
	handleClick = (mentorshiop_id, status) => {
		this.props.updateMentorshipStatus(mentorship_id, status);
	};

	render() {
		return (
			<ListGroup style={{ width: '25rem' }}>
				{this.props.mentorships.map((mentorship) => {
					return (
						<ListGroup.Item>
							{`${mentorship.mentee.first_name} ${mentorship.mentee.last_name}`}{' '}
							{mentorship.status == 'Accepted' ? (
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
export default connect(mapStateToProps, { fetchMentorships })(MentorShips);
