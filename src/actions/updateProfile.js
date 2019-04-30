import { updateProfileBegin, updateProfileSuccess, updateProfileFailure } from './fetchActions';

export function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}
export default function updateProfile(data, currentUser) {
	console.log('This is data inside updateProfile function', data);
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
					interests: data.interests
				}
			})
		})
			.then(handleErrors)
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				console.log('this is json in updateprofile', json);
				dispatch(updateProfileSuccess(json));
				return json;
			})
			.catch((error) => dispatch(updateProfileFailure(error)));
	};
}
