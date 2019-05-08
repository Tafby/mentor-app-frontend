import React, { Component } from 'react';

export default class Message extends Component {
	belongsToCurrentUser = () => {
		return this.props.currentUser.id === this.props.message.user_id;
	};

	getMessageClasses = () => {
		if (this.belongsToCurrentUser()) {
			return 'message-body my-message';
		}
		return 'message-body';
	};
	render() {
		return (
			<div className="message-wrapper">
				<div className={this.getMessageClasses()}>
					{`${this.props.message.full_name}: 
						${this.props.message.body}`}
				</div>
				<div className="message-info" />
			</div>
		);
	}
}
