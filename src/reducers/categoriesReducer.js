import { FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE } from '../actions/categoryActions';

const initialState = {
	categories: [],
	loading: false,
	error: null
};

export default function categoriesReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_CATEGORIES_SUCCESS:
			console.log('fetch Categories success', action.payload);
			return {
				...state,
				loading: false,
				categories: action.payload.categories
			};
		case FETCH_CATEGORIES_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error,
				categories: []
			};
		default:
			return state;
	}
}
