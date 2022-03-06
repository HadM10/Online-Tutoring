import React from 'react'
import Banner from './Banner'
import Ourtrainers from './Ourtrainers'
import Categories from './Categories'
import AllTutorials from './AllTutorials'
import TraineeComments from './Comments'
import Login from './Login'
import Footer from './Footer'

function Home() {
  return (
    <div>
        {/* <Banner /> */}
        <Categories />
        <Login />
        <AllTutorials />
        <Ourtrainers />     
        <TraineeComments />   
        <Footer />
    </div>
  )
}

export default Home