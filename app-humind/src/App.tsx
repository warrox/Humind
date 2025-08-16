import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function ChatBox() {
  return (
    <>
      <div className="chatbox">

        <h2>Test</h2>
      </div>
    </>
  )
}
function App() {
  //const [count, setCount] = useState<number>(0)
  return (
    <>
      <div className="landing">
        <h1>Humind</h1>
      </div>
      <div><ChatBox /></div>
    </>
  )
}

export default App
