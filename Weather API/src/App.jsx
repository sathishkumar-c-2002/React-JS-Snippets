import { useState } from 'react'
//Images
import clearIcon from './assets/clearIcon.png'
import searchIcon from './assets/searchIcon.png'
import windIcon from './assets/windIcon.png'
import humidityIcon from './assets/humidityIcon.png'
import snowIcon from './assets/snowIcon.webp'
import viteLogo from '/vite.svg'
import './App.css'

const WeatherDetails =({icon,temp,city,country,lat,lon,humidity,wind})=>{
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
      <span className='lat'>latitude</span>
      <span> {lat} </span>
    </div>
    <div>
      <span className='lon'>longitude</span>
      <span> {lon} </span>
    </div>
  </div>
  <div className='data-container'>
      <div className='element'>
        <img src={humidityIcon}/>
      <div className='data'>
        <div className='humidity-data'>{humidity}</div>
        <div className='text'>Humidity</div>
      </div>
      </div>
      <div className='element'>
        <img src={windIcon}/>
      <div className='data'>
        <div className='humidity-data'>{wind} km/hr</div>
        <div className='text'>WindSpeed</div>
      </div>
      </div>
    </div>
  </>  
 )
}

function App() {
  const [icon,setIcon] = useState(snowIcon)
  const [temp,setTemp] = useState(0)
  const [city,setCity] =useState("Chennai")
  const [country,setCountry]=useState("IN")
  const [lat,setLat]=useState(0)
  const [lon,setLon]=useState(0)
  const [wind,setWind]=useState(0)
  const [humidity,setHumidity]=useState(0)

  return (
    <>
      <div className='container'>
        <div className='input-container'>
          <input type='text' className='city-input' placeholder='search-city' />
          <div className='search-icon'></div>
            <img className='searchIcon'src={searchIcon} alt='Search' /> {/*Search Icon*/}
          </div>
        <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} lon={lon} humidity={humidity} wind={wind}/>
      </div>
    </>
  )
}

export default App
