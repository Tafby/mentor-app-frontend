import toaster from 'toasted-notes';
export default function logout() {
	localStorage.clear();
	window.location.replace('/login');
	toaster.notify('Thanks for coming!', {
		duration: 2000
	});
}
