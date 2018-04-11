const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?';
const API_KEY = 'e2a9d3bbc82b867e97b63c4481b5ebac';

const WeatherService = {

	async getWeather(lat, lng) {

		const url = BASE_URL + 'lat=' + lat + '&lon=' + lng + '&APPID=' + API_KEY;

		return fetch(url)
			.then((response) => response.json())
			.then((responseJson) => {
				return responseJson;
			})
			.catch((error) => {
				console.error(error);
			});
	},

	format(weatherData) {
		let isRaining = false;

		switch (weatherData.weather[0].id[0]) {
			case "2":
			case "3":
			case "5": isRaining = true; break;
			default: break;
		}

		return {
			isRaining,
			description: weatherData.weather[0].description,
			iconUrl: 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png'
		}
	}
};

module.exports = WeatherService;