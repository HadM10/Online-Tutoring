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
        if (localStorage.getItem("Payed")) {
            handlePayed(localStorage.getItem("Payed"))
            console.log(payed)
        }
        else {
            handlePayed(false)
        }
    }

    const retrieveLessons = () => {
        Backend.getLessons(lessonId)
            .then(response => {
                setLessons(response.data)
                // let arrDateTime = []
                // console.log(response.data)
                // let theDate = response.data[0].tutorial.dateTime
                // console.log(theDate)
                // // for(let i=0; i<theDate.length; i++){
                // // arrDateTime.push(theDate[i].DateTime)
                // // }
                // arrDateTime.push(theDate)
                // console.log(arrDateTime)
                // console.log(response.data)
                // setDates(arrDateTime)
            })
            .catch(e => {
                console.log(e)
            })
    }

    const confirmLesson = () => {
        if(!dates){
            //SEND DATES AND LESSON_ID AND TUTORIAL_ID
        }
        else{
            //choose a date
        }
    }

    const enrollPay = () => {

        const enroll = async (e) => {
            e.preventDefault()
            localStorage.setItem("url", url)
            console.log(url)
            navigate('/payment')

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
                                {/* {console.log(Lesson.tutorial.dateTime.map((datet) => {datet.DateTime}))} */}
                            </div>
                            <div className='starting'>
                                <div className="dayData">
                                    {console.log(dates)}
                                    <select className='card-button-lesson' onChange={(e) => setDates(e.target.value)}> <option key={-1} value='Choose Datetime'>Choose DateTime</option>
                                        {Lesson.tutorial.dateTime.map((dayData, i) => { return <option key={i} value={dayData.DateTime}> {DateFormat.formatDate(dayData.DateTime)}</option> })}
                                    </select>
                                </div>
                                <div className='lesson-start'>
                                    <button className='card-button-lesson' onClick={confirmLesson}>Confirm</button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })
        )
    }
    return (
        <div>
            <div className='subCategory-banner'><img className='subCategory-banner-image' src='https://cdn1.byjus.com/the-learning-tree/wp-content/uploads/2019/10/09072017/hobby_blog-banner.jpg'></img>
                <div className="subCategory-banner--fadeBottom"></div>
            </div >
            <h1 className='get-started'>Let's Get Started!</h1>
            <h2 className='new-skill'>Learn a new skill online with a private tutor</h2>
            <h3 className='levels'>Beginner, Intermediate & Advanced</h3>
            <div className='enrollment'>{enrollPay()} <div className={`sign-in-request ${loggedIn && 'sign-in-done'}`}>Sign In First</div></div>

            <div class="">
                {displayLessons()}
            </div>
        </div>
    )
}

export default Lessons