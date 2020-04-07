// Imports
import { categories } from './common.js';

// Queries
const themeToggle = document.querySelector('.theme-toggle');
const container = document.querySelector('.categoryContainer');
const template = document.querySelector('.categoryTemplate');
const statusArr = Array.from(document.querySelectorAll('.toggleStatus'));

// Set categories
categories.forEach((e) => {
	const clone = template.content.cloneNode(true);
	clone.querySelector('h3').innerHTML = e.name;
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
		} else {
			e.target.classList.remove('bg-primary-sage', 'border-primary-sage', 'justify-end');
			e.target.classList.add('bg-utility-bordergrey', 'border-utility-bordergrey', 'justify-start');
		}
	} else if (e.target.parentElement.classList.contains('toggleStatus')) {
		if (e.target.parentElement.classList.contains('bg-utility-bordergrey')) {
			e.target.parentElement.classList.remove(
				'bg-utility-bordergrey',
				'border-utility-bordergrey',
				'justify-start'
			);
			e.target.parentElement.classList.add('bg-primary-sage', 'border-primary-sage', 'justify-end');
		} else {
			e.target.parentElement.classList.remove('bg-primary-sage', 'border-primary-sage', 'justify-end');
			e.target.parentElement.classList.add('bg-utility-bordergrey', 'border-utility-bordergrey', 'justify-start');
		}
	}
});

document.addEventListener('DOMContentLoaded', function() {
	const statusArr = Array.from(document.querySelectorAll('.toggleStatus'));
	console.log(statusArr.l);
});
