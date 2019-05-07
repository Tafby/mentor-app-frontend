import React, { Component } from 'react';
import MentorInfoDisplay from '../components/MentorInfoDisplay';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import UserInfo from '../components/UserInfo';

class EditProfilePage extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Col>
						<b>Profile Information</b>
						<br />
						<UserInfo />
					</Col>
					<Col xs lg="2" />
					<Col>
						<b>My Mentor Profile Info</b>
						<MentorInfoDisplay />
						<br />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default EditProfilePage;
