import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PodcastBox from './molecules/PodcastBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>hola</h1>
     <PodcastBox/>
    </>
  )
}

export default App
