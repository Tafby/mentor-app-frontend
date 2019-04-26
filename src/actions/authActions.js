import * as types from './actionTypes';

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
		return (
			fetch(`http://localhost:3000/users`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ user: user })
			})
				// .then((response) => {
				// 	if (!response.ok) {
				// 		throw Error(response.statusText);
				// 	}
				// 	return response;
				// })
				.then((response) => response.json())
				.then((userJson) => {
					dispatch(
						authenticate({
							email: userJson.email,
							password: userJson.password
						})
					);
				})
				.catch((errors) => {
					dispatch(authFailure(errors));
				})
		);
	};
};

export const authenticate = (credentials) => {
	console.log('credentials', credentials);
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
				return getUser(credentials);
			})
			.then((user) => {
				console.log(user);
				dispatch(authSuccess(user, localStorage.token));
			})
			.catch((errors) => {
				dispatch(authFailure(errors));
				localStorage.clear();
			});
	};
};

export const getUser = (credentials) => {
	const request = new Request(`http://localhost:3000/find_user`, {
		method: 'POST',
		headers: new Headers({
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.token}`
		}),
		body: JSON.stringify({ user: credentials })
	});
	return fetch(request)
		.then((response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response;
		})
		.then((response) => response.json())
		.then((userJson) => {
			return userJson;
		})
		.catch((error) => {
			return error;
		});
};
