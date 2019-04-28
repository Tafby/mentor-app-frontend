import {
	fetchMentorsBegin,
	fetchMentorsSuccess,
	fetchMentorsFailure,
	createMentorsBegin,
	createMentorsSuccess,
	createMentorsFailure
} from './fetchActions';

export function fetchMentors() {
	return (dispatch) => {
		dispatch(fetchMentorsBegin());
		return fetch('http://localhost:3000/mentor_profiles')
			.then(handleErrors)
			.then((res) => res.json())
			.then((json) => {
				console.log('the fetchmentors ', json);
				dispatch(fetchMentorsSuccess(json));
				return json;
			})
			.catch((error) => dispatch(fetchMentorsFailure(error)));
	};
}

export function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}

export function makingMentorProfile(mentorInfo) {
	return (dispatch) => {
		dispatch(createMentorsBegin());
		return fetch('http://localhost:3000/mentor_profiles', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.token}`
			},
			body: JSON.stringify({
				category_id: 1,
				description: mentorInfo.description,
				active: true
			})
		})
			.then(handleErrors)
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				console.log(json);
				dispatch(createMentorsSuccess(json));
				return json;
			})
			.catch((error) => dispatch(createMentorsFailure(error)));
	};
}
