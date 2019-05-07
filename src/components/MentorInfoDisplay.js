import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import toaster from 'toasted-notes';
// import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { makingMentorProfile } from '../actions/userActions';
import Alert from 'react-bootstrap/Alert';
import { fetchCategories } from '../actions/categoryActions';

class MentorInfoDisplay extends Component {
	constructor(props) {
		super(props);
		this.state = {
			category: '',
			descritpion: ''
		};
	}

	//TODO: RENDER THE CATEGORIES IN A LIST and store id so when mentorship is created it has that category

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.makingMentorProfile(this.state);
		toaster.notify('Mentor Profile Activated', {
			duration: 2000
		});
	};
	render() {
		console.log('CATEGORIES', this.props.categories);
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Group as={Col} controlId="formGridState">
					<Form.Label>Category</Form.Label>
					<Form.Control as="select">
						<option>Choose...</option>
						{this.props.categories.map((category) => {
							return <option>{category}</option>;

							// <Form.Control
							// 	value={this.state.category}
							// 	onChange={this.handleChange}
							// 	placeholder="Category"
							// 	name="category"
							// 	type="category"
							// />;
						})}
					</Form.Control>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
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
