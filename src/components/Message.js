import React, { Component } from 'react';

export default class Message extends Component {
	render() {
		return <div>{this.props.message.body}</div>;
	}
}
