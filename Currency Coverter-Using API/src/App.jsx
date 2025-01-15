import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [amount, setAmount] = useState(null)
  const [fromCurrency, setFromCurrency] = useState("INR")
  const [toCurrency, setToCurrency] = useState("USD")
  const [changedCurrency, setChangedCurrency] = useState(null)
  const [exchangeCurrency,setExchangeCurrency] = useState(null)

  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
        let response = await fetch(url)
        let data = await response.json()
        console.log(data)
        setExchangeCurrency(data.rates[toCurrency])
        console.log(exchangeCurrency)
      }
      catch (error) {
        console.error
      }
    }
    getExchangeRate()
  }, [fromCurrency,toCurrency])

  useEffect(()=>{
    setChangedCurrency((amount*exchangeCurrency).toFixed(2))
  },[amount,exchangeCurrency])
  const handleAmountChange = (event) => { 
    const value = parseFloat(event.target.value);
     setAmount(isNaN(value) ? 0 : value);
    }

  const handleFromCurrency = (event)=>{
    setFromCurrency(event.target.value)
  }
  const handleToCurrency = (event)=>{
    setToCurrency(event.target.value)
  }
  return (
    <>
      <div className="currency-converter">
        <div className="box"></div>
        <div className="data">
          <h1>Currency Converter</h1>
          <div className="input-container">
            <label htmlFor="amount-digit">Amount</label>
            <input type="number" id="amount-digit" value={amount} onChange={handleAmountChange} />
          </div>
          <div className="input-container">
            <div className="fromCurrency">
              <label htmlFor="fromCurrency">From Currency</label>
              <select id="fromCurrency" value={fromCurrency} onChange={handleFromCurrency}>
                <option value="USD">USD - United States Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound Sterling</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="CNY">CNY - Chinese Yuan</option>
                <option value="INR">INR - Indian Rupee</option>
                <option value="BRL">BRL - Brazilian Real</option>
                <option value="ZAR">ZAR - South African Rand</option>
              </select>
            </div>
          </div>
          <div className="input-container">
            <div className="toCurrency">
              <label htmlFor="toCurrency">To Currency</label>
              <select id="toCurrency" value={toCurrency} onChange={handleToCurrency}>
                <option value="USD">USD - United States Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound Sterling</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="CNY">CNY - Chinese Yuan</option>
                <option value="INR">INR - Indian Rupee</option>
                <option value="BRL">BRL - Brazilian Real</option>
                <option value="ZAR">ZAR - South African Rand</option>
              </select>
            </div>
          </div>
          <div className="result">
            <p>{amount} {fromCurrency} is eqaul to {changedCurrency} {toCurrency}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
