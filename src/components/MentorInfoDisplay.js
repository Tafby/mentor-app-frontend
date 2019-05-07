import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import toaster from 'toasted-notes';
import { connect } from 'react-redux';
import { makingMentorProfile } from '../actions/userActions';
import { fetchCategories } from '../actions/categoryActions';

class MentorInfoDisplay extends Component {
	constructor(props) {
		super(props);
		this.state = {
			category: 1,
			descritpion: '',
			days_can_meet: '',
			years_mentoring: ''
		};
	}
	componentDidMount() {
		this.props.fetchCategories();
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
		console.log(this.state);
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.makingMentorProfile(this.state);
		toaster.notify('Mentor Profile Activated', {
			duration: 2000
		});
	};
	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Group as={Col} controlId="formGridState">
					<Form.Label>Category</Form.Label>
					<Form.Control as="select" name="category" onChange={this.handleChange} type="category">
						<option>Choose...</option>
						{this.props.categories.map((category) => {
							return (
								<option key={category.id} value={category.id}>
									{category.name}
								</option>
							);
						})}
					</Form.Control>
				</Form.Group>

				<Form.Group>
					<Form.Label>Description of Mentorship</Form.Label>
					<Form.Control
						as="textarea"
						rows="3"
						value={this.state.description}
						onChange={this.handleChange}
						placeholder="Description of the mentorship you are offering"
						name="description"
						type="description"
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>How Many Days Can You Meet a Week?</Form.Label>
					<Form.Control
						value={this.state.days_can_meet}
						onChange={this.handleChange}
						name="days_can_meet"
						type="text"
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>How Many Years Have You Mentored?</Form.Label>
					<Form.Control
						value={this.state.years_mentoring}
						onChange={this.handleChange}
						name="years_mentoring"
						type="text"
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Activate
				</Button>
			</Form>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		mentor: state.createMentor.mentor,
		errors: state.createMentor.errors,
		categories: state.categories.categories
	};
};
export default connect(mapStateToProps, { makingMentorProfile, fetchCategories })(MentorInfoDisplay);
