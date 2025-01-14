import { useEffect, useState } from 'react'
//Images
import clearIcon from './assets/clearIcon.png'
import mistIcon from './assets/mistIcon.png'
import cloudIcon from './assets/cloudIcon.png'
import scatterCloudIcon from './assets/scatterCloudIcon.png'
import brokenCloudIcon from './assets/brokenCloudIcon.png'
import showerRainIcon from './assets/showerRainIcon.png'
import rainIcon from './assets/rainIcon.png'

import searchIcon from './assets/searchIcon.png'
import thunderStormIcon from './assets/thunderStormIcon.png'
import windIcon from './assets/windIcon.png'
import humidityIcon from './assets/humidityIcon.png'
import snowIcon from './assets/snowIcon.png'
import viteLogo from '/vite.svg'
import './App.css'

const WeatherDetails = ({ icon, temp, city, country, lat, lon, humidity, wind }) => {
  return (
    <>
      <div className='image'>
        <center> <img src={icon} alt="Image" /></center>
      </div>
      <div className='temp'>{temp}°C</div>
      <div className='location'>{city}</div>
      <div className='country'>{country}</div>
      <div className='cord'>
        <div>
          <span className='lat'>Latitude</span>
          <span> {lat} </span>
        </div>
        <div>
          <span className='lon'>Longitude</span>
          <span> {lon} </span>
        </div>
      </div>
      <div className='data-container'>
        <div className='element'>
          <img src={humidityIcon} />
          <div className='data'>
            <div className='humidity-data'>{humidity}</div>
            <div className='text'>Humidity</div>
          </div>
        </div>
        <div className='element'>
          <img src={windIcon} />
          <div className='data'>
            <div className='wind-data'>{wind} km/hr</div>
            <div className='text'>WindSpeed</div>
          </div>
        </div>
      </div>
    </>
  )
}

function App() {
  const apiKey = "ef1c2181ff4e1e5568b4fe065dfb5c09"
  const [text, setText] = useState("Chennai")
  const [cityNotFound, setCityNotFound] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error,setError] = useState(null)

  const WeatherIcons = {
    "01d": clearIcon,
    "01n": clearIcon,
    "02d": cloudIcon,
    "02n": cloudIcon,
    "03d": scatterCloudIcon,
    "03n": scatterCloudIcon,
    "04d": brokenCloudIcon,
    "04n": brokenCloudIcon,
    "09d": showerRainIcon,
    "09n": showerRainIcon,
    "10d": rainIcon,
    "10n": rainIcon,
    "11d": thunderStormIcon,
    "11n": thunderStormIcon,
    "13d": snowIcon,
    "13n": snowIcon,
    "50d": mistIcon,
    "50n": mistIcon,
  }

  const [icon, setIcon] = useState()
  const [temp, setTemp] = useState(0)
  const [city, setCity] = useState("Chennai")
  const [country, setCountry] = useState("IN")
  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)
  const [wind, setWind] = useState(0)
  const [humidity, setHumidity] = useState(0)

  const search = async () => {
    setLoading(true)
    const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apiKey}&units=Metric`
    try {
      let response = await fetch(apiLink)
      let data = await response.json()
      console.log(data)

      if (data.cod === "404") {
        console.log("City is Not Found")
        setCityNotFound(true)
        setLoading(false)
        return;
      }
      const WeatherIconCode = data.weather[0].icon
      setIcon(WeatherIcons[WeatherIconCode])
      setCity(data.name)
      setCountry(data.sys.country)
      setHumidity(data.main.humidity)
      setWind(data.wind.speed)
      setTemp(data.main.temp)
      setLat(data.coord.lat)
      setLon(data.coord.lon)

      setCityNotFound(false)

    } catch (error) {
      console.log(error.message)
    } finally {
      setLoading(false)
    }
  }

  function cityHandler(event) {
    setText(event.target.value)
  }
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      search();
    }
  }
  useEffect(function () {
    search()
  }, [])

  return (
    <>
      <div className='container'>
        <div className='input-container'>
          <input type='text' className='city-input' placeholder='search-city' onChange={cityHandler} onKeyDown={handleKeyDown} value={text} />
          <div className='search-icon'></div>
          <img className='searchIcon' src={searchIcon} alt='Search' onClick={() => search()} /> {/*Search Icon*/}
        </div>

        {loading && <div className="loading-message"><img src={viteLogo}/></div>}
        {error && <div classNmae="error-message">{error}</div>}
        {cityNotFound && <div className="city-not-found">City Not Found</div>}

        {!loading && !cityNotFound && <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} lon={lon} humidity={humidity} wind={wind} />}
        
        
      </div>
    </>
  )
}

export default App
