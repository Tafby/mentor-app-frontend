import React, { Component } from 'react';
import { fetchMentors } from '../actions/userActions';
import { connect } from 'react-redux';
import MentorCardOnSearch from '../components/MentorCardOnSearch';

// TODO: Should fetchMentors actually be fetchMentorships and make a request to "/mentorships"?
// Note: If so, the mentorship serializer in Rails will need to return mentor details.
//TODO: check if the mentor has any mentor-profiles and only render those profiles.

class SearchUsersPage extends Component {
	componentDidMount() {
		return this.props.dispatch(fetchMentors());
	}

	render() {
		const { error, loading, mentors } = this.props;
		console.log('mentors inside render', mentors, 'PROPS', this.props);
		if (error) {
			return <div>Error! {error.message}</div>;
		}
		if (loading) {
			return <div>Loading...</div>;
		}
		return (
			<React.Fragment>
				{mentors.length > 0 ? (
					mentors.map((mentor) => {
						if (mentor.mentor_profiles.length > 0) {
							console.log('iterating through on the searchUsersPage', mentor);
							return <MentorCardOnSearch key={mentor.id} mentor={mentor} />;
						}
					})
				) : null}
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	mentors: state.mentor.mentors
});

export default connect(mapStateToProps)(SearchUsersPage);
