import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { connect } from 'react-redux';

class ConversationList extends Component {
	isUser() {
		console.log(this.props.currentUser);

		if (this.props.currentUser.id === this.props.user.id) {
			return true;
		}
		return false;
	}
	render() {
		return (
			<div>
				{this.props.conversations.map((conversation) => {
					return (
						<div key={conversation.id}>
							Your Conversations:
							<ListGroup defaultActiveKey="#link1">
								<ListGroup.Item onClick={() => this.props.selectConversation(conversation)} action>
									{conversation.id}
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
