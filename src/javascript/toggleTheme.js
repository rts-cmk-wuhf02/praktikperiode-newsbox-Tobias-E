// Queries
const toggle = document.querySelector('.theme-toggle');
const fetchLocalTheme = localStorage.getItem('theme');

toggle.addEventListener('click', () => {
	if (document.documentElement.dataset.theme == 'light') {
		document.documentElement.dataset.theme = 'dark';
		window.localStorage.setItem('theme', 'dark');
		toggle.innerHTML = 'Toggle Light Mode';
		console.log('Theme : Dark');
	} else {
		document.documentElement.dataset.theme = 'light';
		window.localStorage.setItem('theme', 'light');
		toggle.innerHTML = 'Toggle Dark Mode';
		console.log('Theme : Light');
	}
});
