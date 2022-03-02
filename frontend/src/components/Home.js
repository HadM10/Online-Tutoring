import React from 'react'
import Banner from './Banner'
import Ourtrainers from './Ourtrainers'
import Categories from './Categories'
import Tutorials from './Tutorials'

function Home() {
  return (
    <div>
        {/* <Banner /> */}
        <Categories />
        <Tutorials />
        <Ourtrainers />
    </div>
  )
}

export default Home