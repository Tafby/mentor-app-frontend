import {
	requestMentorshipBegin,
	requestMentorshipSuccess,
	requestMentorshipFailure,
	fetchMentorShipsBegin,
	fetchMentorShipsSuccess,
	fetchMentorShipsFailure,
	updateMentorshipStatusSuccess,
	updateMentorshipStatusFailure
} from './fetchActionMessages';

export function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}

export function requestMentorship(data) {
	return (dispatch) => {
		dispatch(requestMentorshipBegin());
		return fetch(`http://localhost:3000/mentorships`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.token}`
			},
			body: JSON.stringify({
				mentorships: {
					category_id: 1,
					mentor_id: data
				}
			})
		})
			.then(handleErrors)
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				dispatch(requestMentorshipSuccess(json));
				return json;
			})
			.catch((error) => dispatch(requestMentorshipFailure(error)));
	};
}

export function fetchMentorships() {
	return (dispatch) => {
		dispatch(fetchMentorShipsBegin());
		return fetch('http://localhost:3000/mentorships', {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.token}`
			}
		})
			.then(handleErrors)
			.then((res) => res.json())
			.then((json) => {
				dispatch(fetchMentorShipsSuccess(json));
				return json;
			})
			.catch((error) => dispatch(fetchMentorShipsFailure(error)));
	};
}

export function updateMentorshipStatus(id, status) {
	return (dispatch) => {
		return fetch(`http://localhost:3000/mentorships/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.token}`
			},
			body: JSON.stringify({
				mentorships: {
					status: status
				}
			})
		})
			.then(handleErrors)
			.then((res) => res.json())
			.then((json) => {
				dispatch(fetchMentorships());
			})
			.catch((error) => dispatch(updateMentorshipStatusFailure(error)));
	};
}
