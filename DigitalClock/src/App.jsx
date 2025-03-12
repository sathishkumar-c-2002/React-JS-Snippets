import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [currentTime,setCurrentTime] = useState(new Date())
useEffect(()=>{
  const timer = setInterval(()=>{
    setCurrentTime(new Date())
  },1000)
},[])

const formatZero = (i)=>{
  return i<10?`0${i}`:i
}

const formatHour = (hour)=>{
  return hour===0?12:(hour>12?hour-12:hour)
}

const formatDate = (i)=>{
  const option ={weekday:"long",year:"numeric",month:"long",day :"numeric"}

  return i.toLocaleDateString(undefined,option);
}
  return (
    <>
    <div className="display-container">
      <h1>Digital Clock</h1>
      <div className="time">
         {formatZero(formatHour(currentTime.getHours()))}
         :{formatZero(currentTime.getMinutes())}
         :{formatZero(currentTime.getSeconds())}
         {currentTime.getHours()>=12?"PM":"AM"}
      </div>
      <div className="date">{formatDate(currentTime)}</div>

    </div>
    </>
  )
}

export default App
