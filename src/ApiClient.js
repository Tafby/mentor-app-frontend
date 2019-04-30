API_URL = 'http://localhost:3000';

export function apiFetch(method, path, body = {}) {
	headers = {
		'Content-Type': 'application/json'
	};

	token = localStorage.token;
	if (token) {
		headers['Authorization'] = `Bearer ${localStorage.token}`;
	}

	return fetch(`${API_URL}${path}`, {
		method: method,
		headers: headers,
		body: JSON.stringify(body)
	}).then(handleErrors);
}

function handleErrors(response) {
	if (!response.ok) {
		// try {
		// 	errors = response.json();
		// } catch (e) {}

		throw Error(response);
	}
	return response;
}
