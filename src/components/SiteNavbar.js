import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

export default class SiteNavbar extends Component {
	render() {
		return (
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="/">Mentor App</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					{this.props.isAuthenticated ? (
						<Nav className="mr-auto">
							<Nav.Link href="/search">Search</Nav.Link>
							<Nav.Link href={`/profile/${this.props.currentUser.id}`}>My Profile</Nav.Link>
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
