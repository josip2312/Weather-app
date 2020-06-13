//sucelje
const state = document.querySelector('.weather-state');
const loc = document.querySelector('.weather-city');
const temperature = document.querySelector('.weather-main-temperature');
const desc = document.querySelector('.weather-desc');
const image = document.querySelector('.weather-image');
const feelsLike = document.querySelector('.weather-feels_like');
const humidity = document.querySelector('.weather-humidity');
const pressure = document.querySelector('.weather-pressure');

function UIpaint(weather) {
	loc.textContent = weather.name;
	state.textContent = weather.sys.country;
	temperature.innerHTML = `${weather.main.temp} &deg; C`;
	desc.textContent = weather.weather[0].description;

	image.setAttribute(
		'src',
		`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`,
	);
	humidity.textContent = weather.main.humidity;
	pressure.textContent = weather.main.pressure;
	feelsLike.innerHTML = `${weather.main.feels_like} &deg; C`;
}
