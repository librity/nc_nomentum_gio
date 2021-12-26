const TEN_MINUTES = 10 * 60 * 1000

const WEATHER_API_KEY = '64b4a1917a1162ec2a04717a12f24a9a'
const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
const WEATHER_ICON_BASE_URL = 'https://openweathermap.org/img/wn'

const weatherA = document.getElementById('weather_container')

const iconImg = document.getElementById('weather_icon')

const tempSpan = document.getElementById('weather_temp')
const citySpan = document.getElementById('weather_city')

let weatherURL

const onGeoError = () => {
  alert('Please allow location access for weather forecast.')
}

const buildDarkskyURL = position => {
  const { latitude: lat, longitude: lon } = position.coords

  return `https://darksky.net/forecast/${lat},${lon}/si24/en`
}

const setDarkskyLink = position => {
  const url = buildDarkskyURL(position)

  weatherA.setAttribute('href', url)
}

const buildWeatherURL = position => {
  const { latitude: lat, longitude: lon } = position.coords

  return `${WEATHER_BASE_URL}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
}

const buildWeatherIconURL = iconId => {
  return `${WEATHER_ICON_BASE_URL}/${iconId}@2x.png`
}

const fetchWeatherForecast = async () => {
  const { name: city, weather, main } = await fetchJSON(weatherURL)
  const forecast = { city, weather: weather[0], main }

  return forecast
}

const setForecast = forecast => {
  const iconURL = buildWeatherIconURL(forecast.weather.icon)
  iconImg.setAttribute('src', iconURL)
  iconImg.setAttribute('alt', forecast.weather.description)

  const temp = Math.floor(forecast.main.temp)
  tempSpan.innerText = `${forecast.weather.main} / ${temp}°C`
  citySpan.innerText = forecast.city
}

const getForecast = () => {
  fetchWeatherForecast().then(setForecast).catch(console.error)
}

const onGeoOK = position => {
  weatherURL = buildWeatherURL(position)

  setDarkskyLink(position)

  getForecast()
  setInterval(getForecast, TEN_MINUTES)
}

const weatherInit = () => {
  navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)
}

weatherInit()
