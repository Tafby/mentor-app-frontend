import React, { Component } from 'react';
import MessageList from '../components/MessageList';
import NewMessageForm from '../components/NewMessageForm';

export default class ConversationView extends Component {
	render() {
		return (
			<div className="convo-view">
				{console.log('Conversation view rendered:', this.props.conversation)}
				{this.props.conversation ? (
					<div>
						<MessageList
							currentUser={this.props.currentUser}
							messages={this.props.conversation.messages}
						/>{' '}
						<NewMessageForm
							createMessage={this.props.createMessage}
							conversation={this.props.conversation}
						/>
					</div>
				) : null}
			</div>
		);
	}
}
