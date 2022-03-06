import React from 'react'
import Banner from './Banner'
import Ourtrainers from './Ourtrainers'
import Categories from './Categories'
import AllTutorials from './AllTutorials'
// import Tutorials from './Tutorials'
import TraineeComments from './Comments'

function Home() {
  return (
    <div>
        {/* <Banner /> */}
        <Categories />
        <TraineeComments />
        <AllTutorials />
        <Ourtrainers />
    </div>
  )
}

export default Home