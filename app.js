const weather = new Weather('Mostar');

document.addEventListener('DOMContentLoaded', getWeather);

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	e.stopPropagation();
	const city = document.querySelector('#search').value;
	if (city !== '') {
		weather.changeLocation(city);
		getWeather();
	} else {
		alert('You must enter a value!');
	}
});

//asinkrono pa kad vrati promise puni se sadrzaj
function getWeather() {
	weather
		.getWeather()
		.then((result) => {
			UIpaint(result);
			console.log(result);
		})
		.catch((err) => {
			alert('No city with that name');
		});
}
