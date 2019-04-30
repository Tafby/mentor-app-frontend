import {
	FETCH_MENTORSHIPS_BEGIN,
	FETCH_MENTORSHIPS_SUCCESS,
	FETCH_MENTORSHIPS_FAILURE
} from '../constants/fetchActionTypes';

const initialState = {
	mentorships: [],
	loading: false,
	error: null
};

export default function mentorReducer(state = initialState, action) {
	console.log('IN MENTORREDUCER', action);
	switch (action.type) {
		case FETCH_MENTORSHIPS_BEGIN:
			return {
				...state,
				loading: true,
				error: null
			};
		case FETCH_MENTORSHIPS_SUCCESS:
			console.log('fetch mentorships success', action.payload);
			return {
				...state,
				loading: false,
				mentorships: action.payload
			};
		case FETCH_MENTORSHIPS_FAILURE:
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
