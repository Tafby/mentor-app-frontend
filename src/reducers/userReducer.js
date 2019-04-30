import { FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../constants/fetchActionTypes';

const initialState = {
	userInfo: '',
	loading: false,
	error: null
};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_USER_SUCCESS:
			return {
				...state,
				loading: false,
				userInfo: action.payload.user
			};
		case FETCH_USER_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error,
				userInfo: ''
			};
		default:
			return state;
	}
}
