// Queries
const themeToggle = document.querySelector('.theme-toggle');
const container = document.querySelector('.categoryContainer');
const template = document.querySelector('.categoryTemplate');

// Get localstorage
let localCategories = window.localStorage.getItem('categories');
localCategories = JSON.parse(localCategories);

// Set categories
let updatedCategories = Object.entries(localCategories);

updatedCategories.forEach(([key, value]) => {
	let clone = template.content.cloneNode(true);
	clone.querySelector('h3').innerHTML = key;

	if (value.show == false) {
		clone.querySelector('.toggleStatus').classList.remove('bg-primary-sage', 'border-primary-sage', 'justify-end');
		clone.querySelector('.toggleStatus').classList.add('bg-utility-bordergrey', 'border-utility-bordergrey', 'justify-start');
	}
	container.appendChild(clone);
});

// Removes last border bottom
container.lastChild.previousSibling.classList.remove('border-b');

// Event listeners
// Theme toggle
themeToggle.addEventListener('click', () => {
	if (document.documentElement.dataset.theme == 'light') {
		document.documentElement.dataset.theme = 'dark';
		window.localStorage.setItem('theme', 'dark');
		themeToggle.innerHTML = 'Toggle Light Mode';
	} else {
		document.documentElement.dataset.theme = 'light';
		window.localStorage.setItem('theme', 'light');
		themeToggle.innerHTML = 'Toggle Dark Mode';
	}
});

// Category toggles
container.addEventListener('click', (e) => {
	if (e.target.classList.contains('toggleStatus')) {
		if (e.target.classList.contains('bg-utility-bordergrey')) {
			e.target.classList.remove('bg-utility-bordergrey', 'border-utility-bordergrey', 'justify-start');
			e.target.classList.add('bg-primary-sage', 'border-primary-sage', 'justify-end');
			showTrue(e, localCategories);
		} else {
			e.target.classList.remove('bg-primary-sage', 'border-primary-sage', 'justify-end');
			e.target.classList.add('bg-utility-bordergrey', 'border-utility-bordergrey', 'justify-start');
			showFalse(e, localCategories);
		}
	} else if (e.target.parentElement.classList.contains('toggleStatus')) {
		if (e.target.parentElement.classList.contains('bg-utility-bordergrey')) {
			e.target.parentElement.classList.remove('bg-utility-bordergrey', 'border-utility-bordergrey', 'justify-start');
			e.target.parentElement.classList.add('bg-primary-sage', 'border-primary-sage', 'justify-end');
			showTrueChild(e, localCategories);
		} else {
			e.target.parentElement.classList.remove('bg-primary-sage', 'border-primary-sage', 'justify-end');
			e.target.parentElement.classList.add('bg-utility-bordergrey', 'border-utility-bordergrey', 'justify-start');
			showFalseChild(e, localCategories);
		}
	}
});

// Functions
function showTrue(e) {
	let categories = localCategories;
	let target = e.target.parentElement.innerText.trim();
	categories[target].show = true;
	window.localStorage.setItem('categories', JSON.stringify(categories));
}
function showFalse(e) {
	let categories = localCategories;
	let target = e.target.parentElement.innerText.trim();
	categories[target].show = false;
	window.localStorage.setItem('categories', JSON.stringify(categories));
}
function showTrueChild(e) {
	let categories = localCategories;
	let target = e.target.parentElement.parentElement.innerText.trim();
	categories[target].show = true;
	window.localStorage.setItem('categories', JSON.stringify(categories));
}
function showFalseChild(e) {
	let categories = localCategories;
	let target = e.target.parentElement.parentElement.innerText.trim();
	categories[target].show = false;
	window.localStorage.setItem('categories', JSON.stringify(categories));
}
