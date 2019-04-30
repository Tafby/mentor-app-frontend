import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './containers/Home';
import MyAccount from './containers/MyAccount';
import SignUpPage from './containers/SignUpPage';
import LoginPage from './containers/LoginPage';
import SearchMentors from './containers/SearchMentors';
import EditProfile from './containers/EditProfile';
import Profile from './containers/Profile';
import Messages from './containers/Messages';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux';
import { getUser } from './actions/authActions';
import MentorCard from './components/MentorCard';
import Logout from './components/Logout';

class App extends Component {
	componentDidMount = () => {
		if (!this.props.isAuthenticated && localStorage.token) {
			this.props.getUser(localStorage.token);
		}
	};

	render() {
		return (
			<Router>
				<Navbar bg="light" expand="lg">
					<Navbar.Brand href="/">Mentor App</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="/search">Search</Nav.Link>
							<Nav.Link href="/messages">Messages</Nav.Link>
							{this.props.isAuthenticated ? (
								<Nav.Link href={`/profile/${this.props.currentUser.id}`}>My Profile</Nav.Link>
							) : null}
						</Nav>
						<Form inline>
							{this.props.isAuthenticated ? (
								<Nav.Link href="/logout">Logout</Nav.Link>
							) : (
								<Nav.Link href="/login">Login</Nav.Link>
							)}
						</Form>
					</Navbar.Collapse>
				</Navbar>

				<Route path="/" exact component={Home} />
				<Route path="/profile/:id" exact component={Profile} />
				<Route path="/my-profile" exact component={EditProfile} />
				<Route path="/search" exact component={SearchMentors} />
				<Route path="/signup" exact component={SignUpPage} />
				<Route path="/login" exact component={LoginPage} />
				<Route path="/messages" exact component={Messages} />
				<Route path="/mentor/:id" exact component={MentorCard} />
				<Route path="/logout" exact component={Logout} />
			</Router>
		);
	}
}

const mapStateToProps = (state) => {
	return { currentUser: state.auth.currentUser, isAuthenticated: state.auth.isAuthenticated };
};

export default connect(mapStateToProps, { getUser })(App);
