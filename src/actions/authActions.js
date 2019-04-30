import * as types from '../constants/actionTypes';

const authRequest = () => {
	return {
		type: types.AUTHENTICATION_REQUEST
	};
};

const authSuccess = (user, token) => {
	return {
		type: types.AUTHENTICATION_SUCCESS,
		user: user,
		token: token
	};
};

const authFailure = (errors) => {
	return {
		type: types.AUTHENTICATION_FAILURE,
		errors: errors
	};
};

export const logout = () => {
	return (dispatch) => {
		localStorage.clear();
		return dispatch({
			type: types.LOGOUT
		});
	};
};

export const signup = (user) => {
	return (dispatch) => {
		return fetch(`http://localhost:3000/users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ user: user })
		})
			.then((response) => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response;
			})
			.then((response) => response.json())
			.then((response) => {
				dispatch(
					authenticate({
						email: user.email,
						password: user.password
					})
				);
			})
			.catch((errors) => {
				dispatch(authFailure(errors));
			});
	};
};

export const authenticate = (credentials) => {
	// console.log('credentials inside authenticate function', credentials);
	return (dispatch) => {
		dispatch(authRequest());
		return fetch(`http://localhost:3000/user_token`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ auth: credentials })
		})
			.then((response) => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response;
			})
			.then((response) => response.json())
			.then((response) => {
				const token = response.jwt;
				localStorage.setItem('token', token);
				dispatch(getUser(token));
			})
			.catch((errors) => {
				localStorage.clear();
				console.log('Dispatching authFailure with errors:', errors);
				dispatch(authFailure(errors));
			});
	};
};

export const getUser = (token) => {
	return (dispatch) => {
		return fetch(`http://localhost:3000/find_user`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json'
			}
		})
			.then((response) => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response;
			})
			.then((response) => response.json())
			.then((user) => {
				// console.log('Dispatching authSuccess with user:', user, 'and token:', localStorage.token);
				dispatch(authSuccess(user, localStorage.token));
			})
			.catch((errors) => {
				dispatch(authFailure(errors));
			});
	};
};
