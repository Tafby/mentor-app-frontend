import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export default class ConversationList extends Component {
	render() {
		return (
			<div>
				{this.props.conversations.map((conversation) => {
					return (
						<div key={conversation.id}>
							Conversation:
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
