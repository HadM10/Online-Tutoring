import React from 'react'
import Banner from './Banner'
import Ourtrainers from './Ourtrainers'
import Categories from './Categories'
import AllTutorials from './AllTutorials'
import TraineeComments from './Comments'
import Login from './Login'

function Home() {
  return (
    <div>
        {/* <Banner /> */}
        <Categories />
        <Login />
        <TraineeComments />
        <AllTutorials />
        <Ourtrainers />
        <Footer />
    </div>
  )
}

export default Home