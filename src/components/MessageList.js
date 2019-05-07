import React, { Component } from 'react';
import Message from './Message';

export default class MessageList extends Component {
	messagesEnd = React.createRef();

	componentDidMount() {
		this.scrollToBottom();
	}
	componentDidUpdate() {
		this.scrollToBottom();
	}
	scrollToBottom = () => {
		this.messagesEnd.current.scrollIntoView();
	};
	render() {
		return (
			<div className="message-list">
				{console.log('MessageList rendered', this.props.messages)}
				{this.props.messages.map((message) => {
					return <Message currentUser={this.props.currentUser} key={message.id} message={message} />;
				})}
				<div ref={this.messagesEnd} />
			</div>
		);
	}
}
