import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserDetails } from './components/UserDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserDetails />
    </>
  )
}

export default App
