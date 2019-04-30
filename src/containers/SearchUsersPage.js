import React, { Component } from 'react';
import { fetchMentors } from '../actions/userActions';
import { connect } from 'react-redux';
import MentorCardOnSearch from '../components/MentorCardOnSearch';

// TODO: Should fetchMentors actually be fetchMentorships and make a request to "/mentorships"?
// Note: If so, the mentorship serializer in Rails will need to return mentor details.

class SearchUsersPage extends Component {
	componentDidMount() {
		return this.props.dispatch(fetchMentors());
	}

	render() {
		const { error, loading, mentors } = this.props;
		console.log('mentors inside render', mentors);
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
						return <MentorCardOnSearch key={mentor.id} mentor={mentor} />;
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
