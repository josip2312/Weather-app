import axios from 'axios';
import 'regenerator-runtime/runtime';
import dotenv from 'dotenv';
dotenv.config();

export default class Weather {
	constructor(city) {
		this.city = city;
	}
	async getWeather() {
		const loader = document.querySelector('.loading');
		loader.classList.toggle('visible');
		const req = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${process.env.API_KEY}`,
		);

		return Promise.resolve(req.data);
	}
	changeLocation(city) {
		this.city = city;
	}
}
