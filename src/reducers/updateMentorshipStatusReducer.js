import { UPDATE_MENTORSHIP_STATUS_SUCCESS, UPDATE_MENTORSHIP_STATUS_FAILURE } from '../constants/fetchActionTypes';

const initialState = {
	mentorshipStatus: '',
	loading: false,
	error: null
};

export default function updateMentorshipStatusReducer(state = initialState, action) {
	switch (action.type) {
		case UPDATE_MENTORSHIP_STATUS_SUCCESS:
			return {
				...state,
				loading: false,
				mentorshipStatus: action.payload
			};
		case UPDATE_MENTORSHIP_STATUS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error,
				mentorshipStatus: ''
			};
		default:
			return state;
	}
}
