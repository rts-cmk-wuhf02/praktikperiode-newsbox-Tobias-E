import xmlToJson from './xmlConvert.js';

document.addEventListener('DOMContentLoaded', async function() {
	// Queries
	const main = document.querySelector('.main');
	const categoryContainerTemplate = document.querySelector('.categoryContainerTemplate');
	const articleTemplate = document.querySelector('.articleTemplate');

	// Define how many articles there is for every category
	const articleCount = 2;

	// Get localstorage & convert to array
	let localCategories = localStorage.getItem('categories');
	localCategories = JSON.parse(localCategories);
	let categoryArr = Object.entries(localCategories);

	// Creating categories & articles
	const jsons = await fetchJsons(visibility(categoryArr));

	jsons.forEach(([key, value]) => {
		console.log(key);
		let clone = categoryContainerTemplate.content.cloneNode(true);
		clone.querySelector('h3').innerHTML = key;
		main.appendChild(clone);
		articleCreator(value, articleTemplate, main, articleCount);
	});

	// Event listeners
	main.addEventListener('click', (e) => {
		if (e.target.classList.contains('main__categoryContainer')) {
			if (e.target.querySelector('svg').classList.contains('-rotate-90')) {
				e.target.querySelector('svg').classList.remove('-rotate-90');
				e.target.querySelector('svg').classList.add('-rotate-180');
				articleHide(e, articleCount);
			} else {
				e.target.querySelector('svg').classList.add('-rotate-90');
				e.target.querySelector('svg').classList.remove('-rotate-180');
				articleShow(e, articleCount);
			}
		}
	});

	// Article swipe gesture
	let touchstartX = 0;
	let touchendX = 0;

	main.addEventListener(
		'touchstart',
		function(e) {
			touchstartX = e.changedTouches[0].screenX;
		},
		false
	);

	main.addEventListener(
		'touchend',
		function(e) {
			touchendX = e.changedTouches[0].screenX;
			handleGesture(e, touchendX, touchstartX);
		},
		false
	);
});

// Checks if the category is turned off in settings
function visibility(arr) {
	const visible = arr.filter((category) => {
		return category[1].show === true;
	});
	return visible;
}

// Fetching & converting
async function fetchConverter([key, value]) {
	const response = await fetch(value.url);
	const result = await response.text();
	let xmlnode = new window.DOMParser().parseFromString(result, 'text/xml');
	let data = [key, xmlToJson(xmlnode)];
	return data;
}

// Call fetchConverter on every category
async function fetchJsons(categories) {
	const promises = categories.map((category) => {
		return fetchConverter(category);
	});
	const result = await Promise.all(promises);
	return result;
}

// Creating the articles
function articleCreator(data, articleTemplate, main, articleCount) {
	for (let step = 0; step < articleCount; step++) {
		let clone = articleTemplate.content.cloneNode(true);
		if (data.rss.channel.item[step][`atom:link`].attributes) {
			clone.querySelector('a').href = data.rss.channel.item[step][`atom:link`].attributes.href;
		}
		if (data.rss.channel.item[step][`media:content`]) {
			clone.querySelector('img').src = data.rss.channel.item[step][`media:content`].attributes.url;
		}
		clone.querySelector('h4').innerHTML = data.rss.channel.item[step].title[`#text`];
		clone.querySelector('p').innerHTML = data.rss.channel.item[step].description[`#text`];
		main.appendChild(clone);
	}
}

// Target all the articles in a category and hide them
function articleHide(e, articleCount) {
	let child = e.target;
	for (let step = 0; step < articleCount; step++) {
		if (child.nextElementSibling.classList.contains('relative', '-left-20')) {
			child.nextElementSibling.classList.remove('relative', '-left-20');
		}
		child.nextElementSibling.classList.add('invisible', 'absolute');
		child = child.nextElementSibling;
	}
}
// Target all the articles in a category and show them
function articleShow(e, articleCount) {
	let child = e.target;
	for (let step = 0; step < articleCount; step++) {
		child.nextElementSibling.classList.remove('invisible', 'absolute');
		child = child.nextElementSibling;
	}
}

// Article swipe gesture
function handleGesture(e, touchendX, touchstartX) {
	if (touchendX + 50 < touchstartX) {
		if (e.target.classList.contains('article')) {
			e.target.classList.add('relative', '-left-20');
		}
	}
	if (touchstartX + 50 < touchendX) {
		if (e.target.classList.contains('article')) {
			e.target.classList.remove('relative', '-left-20');
		}
	}
}
