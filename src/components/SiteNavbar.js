import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ChatContainer from '../containers/ChatContainer';

class SiteNavbar extends Component {
	constructor(props) {
		super(props);

		this.state = { show: false };
	}

	modalClose = () => {
		this.setState({ show: false });
	};

	modalOpen = () => {
		this.setState({ show: true });
	};

	render() {
		return (
			<Navbar style={{ fontFamily: 'Montserrat' }} bg="light" expand="lg">
				<Navbar.Brand href="/">MentorMe</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					{this.props.isAuthenticated ? (
						<Nav className="mr-auto">
							<Nav.Link href="/search">Search</Nav.Link>
							<Nav.Link href={`/profile/${this.props.currentUser.id}`}>My Profile</Nav.Link>
							{/* <Nav.Link href={`/mentorships`}>My Mentorships</Nav.Link> */}
							<Nav.Link variant="info" onClick={this.modalOpen}>
								My Messages
							</Nav.Link>

							<ChatContainer show={this.state.show} onHide={this.modalClose} />
						</Nav>
					) : null}
					<Form inline>
						{this.props.isAuthenticated ? (
							<Nav.Link href="/logout">Logout</Nav.Link>
						) : (
							<Nav.Link href="/login">Login</Nav.Link>
						)}
					</Form>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
export default SiteNavbar;
