import axios from 'axios';
import 'regenerator-runtime/runtime';

export default class Weather {
	constructor(city) {
		this.city = city;
	}
	async getWeather() {
		const loader = document.querySelector('.loading');
		loader.classList.toggle('visible');
		const req = await axios.get(
			`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=87d147bb9babc701d0563581a45f275a`,
		);

		return Promise.resolve(req.data);
	}
	changeLocation(city) {
		this.city = city;
	}
}
