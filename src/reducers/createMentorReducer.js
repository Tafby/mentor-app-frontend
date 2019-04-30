import { CREATE_MENTORS_BEGIN, CREATE_MENTORS_SUCCESS, CREATE_MENTORS_FAILURE } from '../actions/fetchActions';

const initialState = {
	loading: false,
	error: null
};

export default function mentorReducer(state = initialState, action) {
	switch (action.type) {
		case CREATE_MENTORS_BEGIN:
			return {
				...state,
				loading: true,
				error: null
			};
		case CREATE_MENTORS_SUCCESS:
			// console.log('CREATE mentors success', action.payload);
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
