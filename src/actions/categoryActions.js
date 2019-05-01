export const FETCH_CATEGORIES_BEGIN = 'FETCH_CATEGORIES_BEGIN';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

export const fetchCategoriesBegin = () => ({
	type: FETCH_CATEGORIES_BEGIN
});

export const fetchCategoriesSuccess = (categories) => ({
	type: FETCH_CATEGORIES_SUCCESS,
	payload: { categories }
});

export const fetchCategoriesFailure = (error) => ({
	type: FETCH_CATEGORIES_FAILURE,
	payload: { error }
});

export function fetchCategories() {
	return (dispatch) => {
		dispatch(fetchCategoriesBegin());
		return fetch('http://localhost:3000/categories')
			.then(handleErrors)
			.then((res) => res.json())
			.then((json) => {
				console.log('the categories ', json);
				dispatch(fetchCategoriesSuccess(json));
				return json;
			})
			.catch((error) => dispatch(fetchCategoriesFailure(error)));
	};
}
export function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}
