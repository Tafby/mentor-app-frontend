import React, { Component } from 'react';
import { fetchMentors } from '../actions/userActions';
import { connect } from 'react-redux';
import MentorCardOnSearch from '../components/MentorCardOnSearch';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { fetchCategories } from '../actions/categoryActions';
import SearchBar from '../components/SearchBar';

// TODO: Should fetchMentors actually be fetchMentorships and make a request to "/mentorships"?
// Note: If so, the mentorship serializer in Rails will need to return mentor details.
//TODO: check if the mentor has any mentor-profiles and only render those profiles.

class SearchUsersPage extends Component {
	componentDidMount() {
		this.props.dispatch(fetchMentors());
		this.props.dispatch(fetchCategories());
	}

	isUser(mentor) {
		if (this.props.currentUser.id === mentor.id) {
			return true;
		}
		return false;
	}

	//create a selectfilter function that takes the selected filter, map through and send the new list
	// selectFilter = (filter) => {
	// 	console.log('filter', filter);
	// 	let filteredList = [];
	// 	this.props.mentors.map((mentor) => {
	// 		console.log('Mentor', mentor);
	// 		mentor.mentor_profiles.map((mp) => {
	// 			console.log('mentor-profile', mp);
	// 			if (mp.category.name === filter) {
	// 				filteredList.push(mentor);
	// 			}
	// 		});
	// 	});
	// 	console.log(filteredList);
	// 	return filteredList;
	// };

	render() {
		const { error, loading, mentors } = this.props;
		if (error) {
			return <div>Error! {error.message}</div>;
		}
		if (loading) {
			return <div>Loading...</div>;
		}
		return (
			<div>
				<h2 className="search-mentors-title">Search Mentors</h2>
				{/* <SearchBar /> */}

				{mentors.length > 0 ? (
					mentors.map((mentor) => {
						if (mentor.mentor_profiles.length > 0) {
							{
								return this.isUser(mentor) ? null : (
									<Row>
										<Col>
											<MentorCardOnSearch
												key={mentor.id}
												// selectFilter={this.selectFilter()}
												mentor={mentor}
											/>
										</Col>
									</Row>
								);
							}
						}
					})
				) : null}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	mentors: state.mentor.mentors,
	currentUser: state.auth.currentUser,
	categories: state.categories.categories
});

export default connect(mapStateToProps)(SearchUsersPage);
