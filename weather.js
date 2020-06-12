//dohvacanje podataka
class Weather {
	constructor(city) {
		this.city = city;
	}
	getWeather() {
		const w = this;
		return new Promise(function (resolve, reject) {
			const xhr = new XMLHttpRequest();
			let data;
			xhr.open(
				'GET',
				`http://api.openweathermap.org/data/2.5/weather?q=${w.city}&units=metric&appid=87d147bb9babc701d0563581a45f275a`,
				true,
			);
			xhr.onload = function () {
				if (this.status === 200) {
					resolve(JSON.parse(this.responseText));
				} else {
					reject({
						status: this.status,
						statusText: xhr.statusText,
					});
				}
			};
			xhr.send();
			return data;
		});
	}
	changeLocation(city) {
		this.city = city;
	}
}
