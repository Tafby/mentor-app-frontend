import React, { Component } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

export default class NewMessageForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			body: ''
		};
	}

	messageInput = React.createRef();

	componentDidUpdate() {
		this.messageInput.current.focus();
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.createMessage(this.props.conversation.id, this.state.body, this.clearMessage);
	};

	clearMessage = () => {
		this.setState({ body: '' });
	};
	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<InputGroup className="mb-3">
					<FormControl
						ref={this.messageInput}
						aria-label="Default"
						aria-describedby="inputGroup-sizing-default"
						placeholder="Enter Message Here"
						onChange={this.handleChange}
						value={this.state.body}
						name="body"
						type="text"
					/>
				</InputGroup>
			</Form>
		);
	}
}
