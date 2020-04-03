// Queries

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
/* 	if (fetchTheme) {
		if (fetchTheme == 'dark') {
			theme = 'dark';
		}
	} else if (!window.matchMedia) {
		// match media not supported
	} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		theme = 'dark';
	} */

//let preferablyTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
/* let theme = window.localStorage.getItem('theme');

console.log(`localstorage: ${window.localStorage.getItem('theme')}`);
console.log(`dataset-theme: ${(document.documentElement.dataset.theme = theme)}`);
if (theme) {
	document.documentElement.dataset.theme = theme;
} */

/* btn.addEventListener('click', () => {
	if (document.documentElement.dataset.theme == 'light') {
		document.documentElement.dataset.theme = 'dark';
		window.localStorage.setItem('theme', 'dark');
		btn.innerHTML = 'Toggle Light Mode';
		console.log('Theme : Dark');
	} else {
		document.documentElement.dataset.theme = 'light';
		window.localStorage.setItem('theme', 'light');
		btn.innerHTML = 'Toggle Dark Mode';
		console.log('Theme : Light');
	}
}); */

/* if (theme == null) {
	if (preferablyTheme) {
		document.documentElement.dataset.theme = 'dark';
		window.localStorage.setItem('theme', 'dark');
	} else {
		document.documentElement.dataset.theme = 'light';
		window.localStorage.setItem('theme', 'light');
	}
} else if (preferablyTheme && theme == 'light') {
	document.documentElement.dataset.theme = 'light';
	// window.localStorage.setItem('theme', 'light');
} else {
	document.documentElement.dataset.theme = 'light';
	window.localStorage.setItem('theme', 'light');
} */

/*
    <script>
        let themes = window.localStorage.getItem('theme');
        if (themes) {
            document.documentElement.dataset.theme = themes;
        }
        console.log(`localstorage: ${window.localStorage.getItem('theme')}`);
    </script> */
