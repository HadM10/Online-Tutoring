import React from 'react'
import Banner from './Banner'
import Ourtrainers from './Ourtrainers'
import Categories from './Categories'
import AllTutorials from './AllTutorials'
import Footer from './Footer'
import TraineeComments from './Comments'

function Home() {
  return (
    <div>
        {/* <Banner /> */}
        <Categories />
        <TraineeComments />
        <AllTutorials />
        <Ourtrainers />
        <Footer />
    </div>
  )
}

export default Home