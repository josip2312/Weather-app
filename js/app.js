import Weather from './weather';
import UIpaint from './ui';
import 'regenerator-runtime/runtime';

const weather = new Weather('Mostar');

document.addEventListener('DOMContentLoaded', getWeather);

const loader = document.querySelector('.loading');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const city = document.querySelector('#search').value;
	if (city !== '') {
		weather.changeLocation(city);
		getWeather();
	} else {
		alert('You must enter a value!');
	}
});

function getWeather() {
	weather
		.getWeather()
		.then((result) => {
			loader.classList.toggle('visible');
			UIpaint(result);
			console.log('Load complete');
			console.log(result);
		})
		.catch((err) => {
			loader.classList.toggle('visible');
			console.error(err);
			alert('No city with that name');
		});
}
