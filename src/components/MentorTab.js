import React, { Component } from 'react';
import Checkbox from '../components/Checkbox';
import CreateMentorForm from './CreateMentorForm';

class MentorTab extends Component {
	//TODO CREATE MENTORTAB ACTIONS, REDCUERS - IF A USER CHECKS THE CHECKBOX, WE NEED TO CREATE A MENTORPROFILE FOR THAT USER
	handleCheckboxChange = (event) => this.setState({ checked: event.target.checked });
	render() {
		return (
			<div>
				<CreateMentorForm />
			</div>
		);
	}
}

export default MentorTab;
