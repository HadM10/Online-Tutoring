import React, { useState, useEffect } from 'react'
import Backend from '../services/Backend'
import { useNavigate, Link, useParams } from 'react-router-dom'
import "../css/Lessons.css"
import Payment from "./Payment"

function Lessons() {
    const [Lessons, setLessons] = useState([])
    const lessonId = useParams().id
    const url = window.location.pathname
    const navigate = useNavigate()


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

    // localStorage.setItem("Payed", payed)

    const retrieveLessons = () => {
        Backend.getLessons(lessonId)
            .then(response => {
                setLessons(response.data)
                console.log(response.data)
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

        return <div className='enroll-btn'><button className='card-button-lesson' onClick={enroll}>Enroll</button></div>
    }
    const displayLessons = () => {
        return (
            Lessons.map((Lesson) => {

                return (
                    <>
                        <div className={`card-lessons ${payed && 'card-lessons-activated'}`}>
                            {console.log(payed)}

                            <img src={Lesson.tutorial.photo} alt="lesson" className="lesson-img"></img>

                            <div className="lesson-info">
                                <h3 className="lesson-title">{Lesson.title}</h3>
                                <p className='lesson-description'>{Lesson.description}</p>
                            </div>
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