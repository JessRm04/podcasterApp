import { useState } from 'react'
import PodcastBox from '../molecules/PodcastBox'


function MainPage() {
  const [count, setCount] = useState(0)

  return (
    <>
     <PodcastBox/>
    </>
  )
}

export default MainPage
