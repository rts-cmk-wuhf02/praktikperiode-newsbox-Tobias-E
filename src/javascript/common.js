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

let categories = [
	{
		name: 'Technology',
		url: 'https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml'
	},
	{
		name: 'Europe',
		url: 'https://rss.nytimes.com/services/xml/rss/nyt/Europe.xml'
	},
	{
		name: 'Sports',
		url: 'https://rss.nytimes.com/services/xml/rss/nyt/Sports.xml'
	},
	{
		name: 'Science',
		url: 'https://rss.nytimes.com/services/xml/rss/nyt/Science.xml'
	},
	{
		name: 'Business',
		url: 'https://rss.nytimes.com/services/xml/rss/nyt/Business.xml'
	}
];

function xmlToJson(xml) {
	// Create the return object
	var obj = {};

	if (xml.nodeType == 1) {
		// element
		// do attributes
		if (xml.attributes.length > 0) {
			obj['attributes'] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj['attributes'][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType == 3 && !obj['attributes']) {
		// text
		obj = xml.nodeValue;
	}

	// do children
	if (xml.hasChildNodes) {
		for (var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof obj[nodeName] == 'undefined') {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof obj[nodeName].push == 'undefined') {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
}

async function test() {
	const response = await fetch('https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml');
	const result = await response.text();
	let xmlnode = new window.DOMParser().parseFromString(result, 'text/xml');
	let data = xmlToJson(xmlnode);
	//console.log(data.rss.channel.item[0]);
	return data;
}
test();

// Exports
export { categories };
