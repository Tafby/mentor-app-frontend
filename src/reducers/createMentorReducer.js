import { CREATE_MENTORS_BEGIN, CREATE_MENTORS_SUCCESS, CREATE_MENTORS_FAILURE } from '../constants/fetchActionTypes';

const initialState = {
	loading: false,
	error: null
};

export default function createMentorReducer(state = initialState, action) {
	switch (action.type) {
		case CREATE_MENTORS_BEGIN:
			return {
				...state,
				loading: true,
				error: null
			};
		case CREATE_MENTORS_SUCCESS:
			return {
				...state,
				loading: false
			};
		case CREATE_MENTORS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error
			};
		default:
			return state;
	}
}
