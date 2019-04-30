import { UPDATE_PROFILE_BEGIN, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAILURE } from '../constants/fetchActionTypes';

const initialState = {
	first_name: '',
	last_name: '',
	location: '',
	interests: '',
	loading: false,
	error: null
};

export default function updateReducer(state = initialState, action) {
	switch (action.type) {
		case UPDATE_PROFILE_BEGIN:
			return {
				...state,
				loading: true,
				error: null
			};
		case UPDATE_PROFILE_SUCCESS:
			console.log('Update profile success', action.payload);
			return {
				...state,
				loading: false,
				first_name: action.first_name,
				last_name: action.last_name,
				location: action.location,
				interests: action.interests
			};
		case UPDATE_PROFILE_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error
			};
		default:
			return state;
	}
}
