import { FETCH_MENTORS_BEGIN, FETCH_MENTORS_SUCCESS, FETCH_MENTORS_FAILURE } from '../constants/fetchActionTypes';

const initialState = {
	mentors: [],
	loading: false,
	error: null
};

export default function mentorReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_MENTORS_BEGIN:
			return {
				...state,
				loading: true,
				error: null
			};
		case FETCH_MENTORS_SUCCESS:
			console.log('fetch mentors success', action.payload);
			return {
				...state,
				loading: false,
				mentors: action.payload.mentors
			};
		case FETCH_MENTORS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error,
				mentors: []
			};
		default:
			return state;
	}
}
