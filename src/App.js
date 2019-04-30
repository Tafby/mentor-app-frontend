import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './containers/HomePage';
import SignUpPage from './containers/SignUpPage';
import LoginPage from './containers/LoginPage';
import SearchUsersPage from './containers/SearchUsersPage';
import EditProfilePage from './containers/EditProfilePage';
import ProfilePage from './containers/ProfilePage';
import SiteNavbar from './components/SiteNavbar';
import { connect } from 'react-redux';
import { getUser } from './actions/authActions';
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
				<SiteNavbar currentUser={this.props.currentUser} isAuthenticated={this.props.isAuthenticated} />
				<Route path="/" exact component={HomePage} />
				<Route path="/profile/:id" exact component={ProfilePage} />
				<Route path="/edit-profile" exact component={EditProfilePage} />
				<Route path="/search" exact component={SearchUsersPage} />
				<Route path="/signup" exact component={SignUpPage} />
				<Route path="/login" exact component={LoginPage} />
				<Route path="/logout" exact component={Logout} />
			</Router>
		);
	}
}

const mapStateToProps = (state) => {
	return { currentUser: state.auth.currentUser, isAuthenticated: state.auth.isAuthenticated };
};

export default connect(mapStateToProps, { getUser })(App);
