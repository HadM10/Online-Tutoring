import React, { useState, useEffect, useContext } from 'react'
import Backend from '../services/Backend'
import { useNavigate, Link, useParams } from 'react-router-dom'
import AuthContext from "../services/AuthContext";
import "../css/Lessons.css"
import DateFormat from '../services/DateFormat'
import Payment from "./Payment"

function Lessons() {
    const [Lessons, setLessons] = useState([])
    const [dates, setDates] = useState('')
    const [chosenDate, setChosenDate] = useState(null)
    const lessonId = useParams().id
    const url = window.location.pathname
    const navigate = useNavigate()
    const { loggedIn } = useContext(AuthContext);


    useEffect(() => {
        retrieveLessons()
        Payed()
    }, []);

    const [payed, handlePayed] = useState(false);
    const Payed = () => {
        console.log(payed)
        if(localStorage.getItem("Payed")){         
            handlePayed(localStorage.getItem("Payed"))
            console.log(payed)
        }
        else{
            handlePayed(false)
        }
    }

    const retrieveLessons = () => {
        Backend.getLessons(lessonId)
            .then(response => {
                setLessons(response.data)
                let arrDateTime = []
                for(let i=0; i<response.data; i++){
                arrDateTime[i] = response.data[i].dateTime.map((dateTime) => dateTime.DateTime)
                }
                console.log(arrDateTime)
                console.log(response.data)
                setDates(arrDateTime)
            })
            .catch(e => {
                console.log(e)
            })
    }

    const enrollPay = () => {

        const enroll = async (e) => {
            e.preventDefault()
            localStorage.setItem("url", url)
            console.log(url)
            let intervalNav = await setInterval(() => {
                navigate('/payment')
                clearInterval(intervalNav)
            }, 1000)
        }

        return <div className={`enroll-btn ${loggedIn && 'enroll-btn-on'}`}><button className='card-button-lesson' onClick={enroll}>Enroll</button></div>
    }
    const displayLessons = () => {
        return (
            Lessons.map((Lesson) => {

                return (
                    <>
                        <div className={`card-lessons ${payed && 'card-lessons-activated'}`}>

                            <img src={Lesson.tutorial.photo} alt="lesson" className="lesson-img"></img>

                            <div className="lesson-info">
                                <h3 className="lesson-title">{Lesson.title}</h3>
                                <p className='lesson-description'>{Lesson.description}</p>
                            </div>
                            {/* <div className="dayData">
                            <ul>
                                {dates.map((dayData, i) => { return <li key={i} className={chosenDate === i ? 'active' : ''}>{DateFormat.formatDate(dayData)}</li> })}
                            </ul>
                        </div> */}
                            <div className='lesson-start'>
                                <button className='card-button-lesson'>Start</button>
                            </div>
                        </div>
                    </>
                )
            })
        )
    }
    return (
        <div>
            <h1 className='get-started'>Let's Get Started!</h1>
            <h2 className='new-skill'>Learn a new skill online with a private tutor</h2>
            <h3 className='levels'>Beginner, Intermediate & Advanced</h3>
            {/* <Link className='link-categories' to={`lessons/${Payment}`}>
            </Link> */}
            <div>{enrollPay()}</div>
            <div class="">
                {displayLessons()}
            </div>
        </div>
    )
}

export default Lessons