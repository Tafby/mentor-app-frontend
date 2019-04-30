import React, { Component } from 'react';
import MentorTab from '../components/MentorTab';
import MentorShips from '../components/MentorShips';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import MyAccount from './MyAccount';

class EditProfile extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Col>
						<Card>
							My Account Info
							<MyAccount />
						</Card>
						<br />
					</Col>
				</Row>
				<Row>
					<Col>
						<Card>
							My Mentor Profile Info
							<MentorTab />
						</Card>
						<br />
					</Col>
				</Row>
				<Row>
					<Col>
						<Card>
							My MentorShips
							<MentorShips />
						</Card>
						<br />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default EditProfile;
