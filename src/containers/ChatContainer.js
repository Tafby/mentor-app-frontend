import React from 'react';
import PropTypes from 'prop-types';
import { API_ROOT } from '../constants/messageConstants';
import ConversationView from '../components/ConversationView';
import ConversationList from '../components/ConversationList';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ActionCable from 'actioncable';
import { connect } from 'react-redux';
class ChatContainer extends React.Component {
	static propTypes = {
		message: PropTypes.string
	};

	constructor(...props) {
		super(...props);

		this.state = {
			cable: null,
			conversations: [],
			selectedConversationId: null
		};
	}

	connectToChannel = () => {
		const cable = ActionCable.createConsumer(`ws://localhost:3000/cable?token=${localStorage.token}`);
		this.setState({ cable: cable });
	};

	subscribeToConversation = (conversation) => {
		this.state.cable.subscriptions.create(
			{
				channel: 'ChatChannel',
				conversation_id: conversation.id
			},
			{
				received: this.handleReceived
			}
		);
	};

	createMessage = (conversation_id, body, callback) => {
		fetch(`${API_ROOT}/conversations/${conversation_id}/messages`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${localStorage.token}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				body: body
			})
		}).then((response) => {
			if (response.ok) {
				callback(response);
			}
		});
	};

	fetchConversations = () => {
		this.connectToChannel();
		fetch(`${API_ROOT}/conversations`, {
			headers: {
				Authorization: `Bearer ${localStorage.token}`,
				'Content-Type': 'application/json'
			}
		})
			.then((res) => res.json())
			.then((conversations) => {
				conversations.map((convo) => {
					this.subscribeToConversation(convo);
				});
				return conversations;
			})
			.then((conversations) => {
				this.setState({ conversations });
			});
	};

	componentDidMount = () => {
		this.fetchConversations();
	};

	handleReceived = (message) => {
		this.setState((prevState, props) => {
			return {
				conversations: prevState.conversations.map((convo) => {
					if (message.conversation_id === convo.id) {
						return {
							...convo,
							messages: [ ...convo.messages, message ]
						};
					}
					return convo;
				})
			};
		});
	};

	selectConversation = (conversation) => {
		this.setState({ selectedConversationId: conversation.id });
	};

	getSelectedConversation = () => {
		let selectedConvo = null;
		this.state.conversations.forEach((convo) => {
			if (convo.id === this.state.selectedConversationId) {
				selectedConvo = convo;
			}
		});
		return selectedConvo;
	};

	render() {
		return (
			<Modal
				show={this.props.show}
				onHide={this.props.onHide}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">Messages</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Container>
						<Row className="show-grid">
							<Col md={4}>
								<ConversationList
									conversations={this.state.conversations}
									selectConversation={this.selectConversation}
								/>
							</Col>

							<Col md={8}>
								<ConversationView
									currentUser={this.props.currentUser}
									createMessage={this.createMessage}
									conversation={this.getSelectedConversation()}
								/>
							</Col>
						</Row>
					</Container>
				</Modal.Body>
				<Modal.Footer />
			</Modal>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.auth.currentUser
});
export default connect(mapStateToProps)(ChatContainer);
