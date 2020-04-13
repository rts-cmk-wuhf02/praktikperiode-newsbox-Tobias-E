import xmlToJson from './xmlConvert.js';

document.addEventListener('DOMContentLoaded', async function() {
	// Queries
	const categoryContainerTemplate = document.querySelector('.categoryContainerTemplate');
	const main = document.querySelector('.main');
	const articleTemplate = document.querySelector('.articleTemplate');

	// Get localstorage
	let localCategories = localStorage.getItem('categories');
	localCategories = JSON.parse(localCategories);

	// Creating categories
	let testArr = Object.entries(localCategories);

	const jsons = await fetchJsons(visibility(testArr));

	jsons.forEach(([key, value]) => {
		let clone = categoryContainerTemplate.content.cloneNode(true);
		clone.querySelector('h3').innerHTML = key;
		main.appendChild(clone);
		articleCreator(value, articleTemplate, main);
	});
});

function visibility(arr) {
	const visible = arr.filter((category) => {
		return category[1].show === true;
	});
	return visible;
}

async function fetchConverter([key, value]) {
	const response = await fetch(value.url);
	const result = await response.text();
	let xmlnode = new window.DOMParser().parseFromString(result, 'text/xml');
	let data = [key, xmlToJson(xmlnode)];
	return data;
}

async function fetchJsons(categories) {
	const promises = categories.map((category) => {
		return fetchConverter(category);
	});
	const result = await Promise.all(promises);
	return result;
}

function articleCreator(data, articleTemplate, main) {
	for (let step = 0; step < 2; step++) {
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
