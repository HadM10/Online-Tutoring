import React from 'react'
import Banner from './Banner'
import Ourtrainers from './Ourtrainers'
import Categories from './Categories'
import AllTutorials from './AllTutorials'
import TraineeComments from './Comments'
import Login from './Login'
import Payment from "./PaymentForm.js"

function Home() {
  return (
    <div>
        <Banner />
        <Categories />
        <Login />
        <AllTutorials />
        <Ourtrainers />     
        <TraineeComments />  
        <Payment />  
        
    </div>
  )
}

export default Home