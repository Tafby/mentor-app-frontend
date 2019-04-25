import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './containers/Home';
import MyAccount from './containers/MyAccount';
import SignUpPage from './containers/SignUpPage';

function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/search/">Search</Link>
						</li>
						<li>
							<Link to="/profile/">My Profile</Link>
						</li>
						<li>
							<Link to="/messages/">Messages</Link>
						</li>
					</ul>
				</nav>

				<Route path="/" exact component={Home} />
				<Route path="/profile" exact component={MyAccount} />
				<Route path="/signup" exact component={SignUpPage} />
			</div>
		</Router>
	);
}

export default App;
