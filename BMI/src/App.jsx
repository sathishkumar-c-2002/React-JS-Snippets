import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [height,setHeight] = useState("")
const [weight,setWeight] = useState("")
const [bmi,setBmi] = useState(null)
const [bmiStatus,setBmiStatus] = useState(null)
const [errorMessage,setErrorMessage]= useState("")
function Heighthandler(event){
setHeight(event.target.value)
}
function Weighthandler(event){
  setWeight(event.target.value)
  }
const  clearAll=()=>{
  setHeight("")
  setWeight("")
  setBmi(null)
  setBmiStatus("")
  setErrorMessage("")

}

function BmiCalculation(){
const isValidHeight = /^\d+$/.test(height)
const isValidWeight = /^\d+$/.test(weight)

  if (isValidHeight && isValidWeight){
    const heightCoversion = height/100
    const weightCalucation = weight/(heightCoversion*heightCoversion)
    setBmi(weightCalucation.toFixed(2))

    if(bmi<18.9){
      setBmiStatus("Underweight")
    }
    else if(bmi >=18.9 && bmi <24.9){
      setBmiStatus("Normal Weight")
    }
    else if(bmi >=24.9 && bmi <29.9){
      setBmiStatus("OverWeight")
    }
    else{
      setBmiStatus("Obese")
    }
    setErrorMessage("")

    }else{
    setBmiStatus(null)
    setBmi(null)
    setErrorMessage("Please Enter Valid numeric Values!")
  }
}

  return (
    <>
    <div className="bmi-calculator">
      <div className="container">
        <img className="image" src={viteLogo} alt="" />
        <div className="data">
          <h1>BMI Calculator</h1>
          {errorMessage && <div className="error"><p>{errorMessage}</p></div>}
          <div className="input-container">
            <label htmlFor="inputHeight">Height(cm) : </label>
            <input type="text" id="inputHeight" value={height} onChange={Heighthandler} />
          </div>
          <div className="input-container">
            <label htmlFor="inputWeight">Weight(KG) : </label>
            <input type="text" id="inputWeight"value={weight} onChange={Weighthandler}/>
          </div>
          <div className="button-section">
            <button className="calculation-btn" onClick={BmiCalculation}>Calculate</button>
            <button className="calculation-btn" onClick={clearAll}>Clear</button>
          </div>
          
          {bmi !== null && <div className="result">
            <p>Your BMI is {bmi}</p>
            <p>Status: {bmiStatus}</p>
          </div>}
          
        </div>
      </div>
    </div>
    </>
  )
}

export default App
