import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { makingMentorProfile } from '../actions/userActions';
import Alert from 'react-bootstrap/Alert';

class MentorInfoDisplay extends Component {
	constructor(props) {
		super(props);
		this.state = {
			category: '',
			descritpion: ''
		};
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.makingMentorProfile(this.state);
		return <Alert variant={'success'}>Added Mentor Profile Successfully </Alert>;
	};
	render() {
		return (
			<Row>
				<Col />
				<Col>
					<Card style={{ width: '18rem' }}>
						<Form onSubmit={this.handleSubmit}>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Category</Form.Label>
								<Form.Control
									value={this.state.category}
									onChange={this.handleChange}
									placeholder="Category"
									name="category"
									type="category"
								/>
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Description of Mentorship</Form.Label>
								<Form.Control
									as="textarea"
									rows="3"
									value={this.state.description}
									onChange={this.handleChange}
									placeholder="Description"
									name="description"
									type="description"
								/>
							</Form.Group>

							<Button variant="primary" type="submit">
								Activate
							</Button>
						</Form>
					</Card>
				</Col>
				<Col />
			</Row>
		);
	}
}
const mapStateToProps = (state) => {
	// console.log('mapStateToProps with state:', state);
	return {
		mentor: state.createMentor.mentor,
		errors: state.createMentor.errors
	};
};
export default connect(mapStateToProps, { makingMentorProfile })(MentorInfoDisplay);
