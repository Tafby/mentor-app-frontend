import React, { Component } from 'react';
import MentorInfoDisplay from '../components/MentorInfoDisplay';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import MentorshipsDisplay from '../components/MentorshipsDisplay';

import UserInfo from '../components/UserInfo';

class EditProfilePage extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Col>
						<Card>
							My Account Info
							<UserInfo />
						</Card>
						<br />
					</Col>
				</Row>
				<Row>
					<Col>
						<Card>
							My Mentor Profile Info
							<MentorInfoDisplay />
						</Card>
						<br />
					</Col>
				</Row>
				<Row>
					<Col>
						<Card>
							My MentorShips
							<MentorshipsDisplay />
						</Card>
						<br />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default EditProfilePage;
