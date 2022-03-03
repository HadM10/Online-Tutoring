import React from 'react'
import Banner from './Banner'
import Ourtrainers from './Ourtrainers'
import Categories from './Categories'
import AllTutorials from './AllTutorials'

function Home() {
  return (
    <div>
        {/* <Banner /> */}
        <Categories />
        <AllTutorials />
        <Ourtrainers />
    </div>
  )
}

export default Home