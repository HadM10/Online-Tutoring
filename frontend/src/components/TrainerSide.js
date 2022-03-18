import React, { useEffect, useState } from "react";
import '../css/Tutorials.css';
import axios from "../axios";
import Backend from "../services/Backend";
import { Link, useParams } from 'react-router-dom'
import '../css/TrainerSide.css'


function TrainerSide() {
    const [tutorials, setTutorials] = useState([]);
    const subCategories = useParams().id
    const [date_Time, setDate_time ] = useState('')

    useEffect(() => {
        retrieveTutorials()
    }, []);


    const handleSubmit = (id) => {
        // e.preventDefault()

if(!date_Time){
    alert("Please add a DateTime")
}
else{
    const datetimeData = {
        DateTime: date_Time,
        available: true
    }

    console.log(datetimeData)

    axios
    .post(`http://localhost:5000/tutorials/addDateTime/${id}`, {'datetime' : datetimeData})
    .then((response) => {
      console.log(response.status)
    })
    .catch((error) => {
        console.log(error);
    });
}
}

    const retrieveTutorials = () => {
        Backend.getTrainerTutorials()
            .then((response) => {
                setTutorials(response.data)
                console.log(response.data)
            }).catch((error) => {
                console.log(error);

            });
    }
    const displayTutorials = () => {
        return (
            tutorials.map((Tutorial) => {
                return (
                    <>
                        <div class="card">
                            {console.log(Tutorial)}
                            <img src={Tutorial.photo} alt="category" className="tutorial-image"></img>
                            {/* <img src={Tutorial.trainerId.photo} alt="category" className="tutorial-imagesmall"></img> */}

                            <div className="tutorial-titles">
                                <div className="tutorial-name"><h3 className="tutorial-title">{Tutorial.subCategories.name}</h3></div>
                                <div className="tutorial-price"><h3 className="tutorial-title">{Tutorial.pricePerLesson}/hr</h3></div>
                            </div>
                            <p className='tutorial-maintitle'>{Tutorial.title}</p>
                            <div className="description-tuto">
                            <p className='tutorial-description'>{Tutorial.description}</p>
                            </div>
                            <div className="datetime-settings">
                            <ul className="all-the-datetimes">{Tutorial.dateTime.map((dayData, i) => {return dayData.available === true? <li key={i} value={dayData.DateTime}> {dayData.DateTime}</li> : '' })}</ul>
                            <br></br>
                            <ul className="all-the-datetimes"><span style={{}}>MY SCHEDULE</span> {Tutorial.dateTime.map((dayData, i) => {return dayData.available === false? <li key={i} value={dayData.DateTime}> {dayData.DateTime}</li> : '' })}</ul>
                            <br></br>
                            
                            <form className="add-new-datetime">
                            <input type="text" className="register-Input-phone  datetime-input" name="DateTime" onChange={(e) => setDate_time(e.target.value)} placeholder='Add a new DateTime' value={date_Time}/>
                            <button className='add-datetime' type='button' value="Submit" onClick={() => handleSubmit(Tutorial._id)}/>
                            </form>
                            </div>
                            <Link className='link-categories' to={`lessons/${Tutorial._id}`}>
                                <button className='tutorial-button'>More</button>
                            </Link>

                        </div>
                    </>
                )
            })
        )
    }
    return (
        <div>
            <div className='tutorial-banner'> <img className='tutorial-banner-image' src='https://t4.ftcdn.net/jpg/01/65/87/51/240_F_165875182_bzOhEp77wKqWSNuo3D5CGH2PrqGfRZUt.jpg'></img>
            <div className="tutorial-banner--fadeBottom"></div>
            </div>
            <h1 className='get-started'>My Tutorials</h1>
            <h2 className='new-skill'>__________Tutorials__________</h2>
            <div class="flex-container wrap">
                {displayTutorials()}
            </div>
        </div>
    )
}
export default TrainerSide