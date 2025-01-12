import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserDetails } from './components/UserDetails'
import { FormWithUseState } from './components/FormWithUseState'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UserDetails /> */}
      <FormWithUseState />
      
    </>
  )
}

export default App
