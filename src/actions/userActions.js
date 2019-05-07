import {
	fetchMentorsBegin,
	fetchMentorsSuccess,
	fetchMentorsFailure,
	createMentorsBegin,
	createMentorsSuccess,
	createMentorsFailure,
	updateProfileBegin,
	updateProfileSuccess,
	updateProfileFailure
} from './fetchActionMessages';

import * as types from '../constants/fetchActionTypes';

export const fetchUserSuccess = (user) => ({
	type: types.FETCH_USER_SUCCESS,
	payload: { user }
});

export const fetchUserFailure = (error) => ({
	type: types.FETCH_USER_FAILURE,
	payload: { error }
});

export function fetchUser(id) {
	return (dispatch) => {
		// dispatch(fetchMentorsBegin());
		return fetch(`http://localhost:3000/users/${id}`)
			.then(handleErrors)
			.then((res) => res.json())
			.then((json) => {
				dispatch(fetchUserSuccess(json));
				return json;
			})
			.catch((error) => dispatch(fetchUserFailure(error)));
	};
}

export function fetchMentors() {
	return (dispatch) => {
		dispatch(fetchMentorsBegin());
		return fetch('http://localhost:3000/users')
			.then(handleErrors)
			.then((res) => res.json())
			.then((json) => {
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
				category_id: mentorInfo.category,
				description: mentorInfo.description,
				active: true,
				days_can_meet: mentorInfo.days_can_meet,
				years_mentoring: mentorInfo.years_mentoring
			})
		})
			.then(handleErrors)
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				dispatch(createMentorsSuccess(json));
				return json;
			})
			.catch((error) => dispatch(createMentorsFailure(error)));
	};
}

export default function updateProfile(data, currentUser) {
	return (dispatch) => {
		dispatch(updateProfileBegin());
		return fetch(`http://localhost:3000/users/${currentUser.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.token}`
			},
			body: JSON.stringify({
				user: {
					first_name: data.first_name,
					last_name: data.last_name,
					location: data.location,
					interests: data.interests,
					picture: data.picture
				}
			})
		})
			.then((response) => {})
			.then(handleErrors)
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				dispatch(updateProfileSuccess(json));
				return json;
			})
			.catch((error) => dispatch(updateProfileFailure(error)));
	};
}
