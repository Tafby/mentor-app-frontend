import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { connect } from 'react-redux';

class ConversationList extends Component {
	isUser() {
		if (this.props.currentUser.id === this.props.user.id) {
			return true;
		}
		return false;
	}

	isUserName = (conversation) => {
		let userName = null;
		conversation.users.forEach((user) => {
			if (this.props.currentUser.id !== user.id) {
				userName = `${user.first_name} ${user.last_name}`;
			}
		});

		return userName;
	};
	render() {
		return (
			<div>
				<h5>Your Conversations:</h5>
				{this.props.conversations.map((conversation) => {
					return (
						<div key={conversation.id}>
							<ListGroup className="conversation" defaultActiveKey="#link1">
								<ListGroup.Item onClick={() => this.props.selectConversation(conversation)} action>
									{this.isUserName(conversation)}
								</ListGroup.Item>
							</ListGroup>
						</div>
					);
				})}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.auth.currentUser
});
export default connect(mapStateToProps)(ConversationList);
