import toaster from 'toasted-notes';
export default function logout() {
	localStorage.clear();
	window.location.replace('/login');
}
