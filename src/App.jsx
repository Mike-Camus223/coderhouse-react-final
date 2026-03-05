import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1 class="text-3xl font-bold text-red-500 underline">
    Hello world!
  </h1>
    </>
  )
}

export default App
