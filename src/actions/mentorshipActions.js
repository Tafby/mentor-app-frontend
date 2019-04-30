import {
	requestMentorshipBegin,
	requestMentorshipSuccess,
	requestMentorshipFailure,
	fetchMentorShipsBegin,
	fetchMentorShipsSuccess,
	fetchMentorShipsFailure
} from './fetchActions';

export function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}
export function requestMentorship(data, currentUserId) {
	console.log('This is data inside updateProfile function', data, currentUserId);
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
					mentor_id: data,
					mentee_id: currentUserId,
					status: 'pending'
				}
			})
		})
			.then(handleErrors)
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				console.log('this is json in requestMentoship', json);
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
				console.log('the MENTORSHIPS ', json);
				dispatch(fetchMentorShipsSuccess(json));
				return json;
			})
			.catch((error) => dispatch(fetchMentorShipsFailure(error)));
	};
}
export function updateMentorshipStatus(id, status) {
	return (dispatch) => {
		return fetch(`http://localhost:3000/mentorships/${id}`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.token}`
			},
			body: JSON.stringify({
				status: status
			})
		})
			.then(handleErrors)
			.then((res) => res.json())
			.then((json) => {
				console.log('the MENTORSHIPS ', json);
				dispatch(updateMentorshipStatusSuccess(json));
				return json;
			})
			.catch((error) => dispatch(updateMentorshipStatusFailure(error)));
	};
}
