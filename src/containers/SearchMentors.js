import React, { Component } from 'react';
import MentorShips from '../components/MentorShips';
import { fetchMentors } from '../actions/userActions';
import { connect } from 'react-redux';
import Mentor from '../components/Mentor';

class SearchMentors extends Component {
	componentDidMount() {
		// console.log('comp did mount', this.props.dispatch(fetchMentors()));
		return this.props.dispatch(fetchMentors());
		// console.log(props);
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
						return <Mentor key={mentor.id} mentor={mentor} />;
					})
				) : null}
			</React.Fragment>
		);
	}
}

// const mappingFunction = () => {
// 	const { mentors } = this.props;
// 	mentors.map((mentor) => {
// 		console.log('MENTO YO', mentor);
// 		return mentor;
// 	});
// };

const mapStateToProps = (state) => ({
	mentors: state.mentor.mentors
});

export default connect(mapStateToProps)(SearchMentors);
