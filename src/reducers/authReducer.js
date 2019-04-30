import * as types from '../actions/actionTypes';
const initialState = {
	isAuthenticated: false,
	isAuthenticating: false,
	currentUser: {},
	token: null,
	errors: []
};

export default (state = initialState, action) => {
	// console.log('Current state:', state);
	// console.log('Entering authReducer for action:', action);
	switch (action.type) {
		case types.AUTHENTICATION_REQUEST:
			// console.log('In Auth Request action');
			return {
				...state,
				isAuthenticating: true
			};
		case types.AUTHENTICATION_SUCCESS:
			// console.log('In Auth Success action with user:', action.user, 'and token:', action.token);
			return {
				...state,
				isAuthenticated: true,
				isAuthenticating: false,
				somethingElse: '1',
				currentUser: action.user,
				token: action.token
			};
		case types.AUTHENTICATION_FAILURE:
			// console.log('In Auth Failure action with errors:', action.errors);
			return {
				...state,
				isAuthenticated: false,
				isAuthenticating: false,
				currentUser: {},
				token: null,
				errors: action.errors || []
			};
		case types.LOGOUT:
			return {
				...state,
				isAuthenticated: false,
				isAuthenticating: false,
				currentUser: {},
				token: null
			};
		default:
			// console.log('In authReducer DEFAULT');
			return state;
	}
};
