import { UPDATE_MENTORSHIP_STATUS_SUCCESS, UPDATE_MENTORSHIP_STATUS_FAILURE } from '../constants/fetchActionTypes';

const initialState = {
	mentorshipStatus: '',
	loading: false,
	error: null
};

export default function updateMentorshipStatusReducer(state = initialState, action) {
	switch (action.type) {
		case UPDATE_MENTORSHIP_STATUS_SUCCESS:
			console.log('fetch mentorships success', action.payload);
			// return array.map((item, index) => {
			//   if (index !== action.index) {
			//     // This isn't the item we care about - keep it as-is
			//     return item
			//   }

			//   // Otherwise, this is the one we want - return an updated value
			//   return {
			//     ...item,
			//     ...action.item
			//   }
			// })

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
