import React, { Component } from 'react';
import MentorTab from '../components/MentorTab';
import MentorShips from '../components/MentorShips';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MyAccount from './MyAccount';

class EditProfile extends Component {
	//TODO: CREATE TABS FOR EACH THING - MENTORTAB, MENTORSHIPSTAB, MYACCOUNTTAB
	render() {
		return (
			<Tabs id="controlled-tab-example" onSelect={(key) => this.setState({ key })}>
				<Tab eventKey="home" title="Account Info">
					<MyAccount />
				</Tab>
				<Tab eventKey="profile" title="MentorShips">
					<MentorShips />
				</Tab>
				<Tab eventKey="contact" title="Mentor">
					<MentorTab />
				</Tab>
			</Tabs>
		);
	}
}

export default EditProfile;
