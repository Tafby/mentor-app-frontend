import React, { Component } from 'react';
import Message from './Message';

export default class MessageList extends Component {
	render() {
		return (
			<div className="message-list">
				{console.log('MessageList rendered', this.props.messages)}
				{this.props.messages.map((message) => {
					return <Message key={message.id} message={message} />;
				})}
			</div>
		);
	}
}
