import { useState } from 'react'
import './App.css'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="CarbTrackerDiv">
        <h1 className="trackerh1"> Carb tracker </h1>
        <Form />
      </div>
    </>
  )
}

export default App
