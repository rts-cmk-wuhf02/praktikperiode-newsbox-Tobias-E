function detectColorTheme() {
	const fetchTheme = window.localStorage.getItem('theme');

	if (fetchTheme == 'dark') {
		document.documentElement.setAttribute('data-theme', 'dark');
		// console.log('dark theme');
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
		// console.log('light theme');
	}
}
detectColorTheme();
