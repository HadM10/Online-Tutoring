import React, { useState, useEffect } from 'react'
import Backend from '../services/Backend'
import { Link, useParams } from 'react-router-dom'
import "../css/Lessons.css"

function Lessons() {
    const [Lessons, setLessons] = useState([])
    const lessonId = useParams().id


    useEffect(() => {
        retrieveLessons()
    }, []);

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
    const displayLessons = () => {
        return (
            Lessons.map((Lesson) => {

                return (
                    <>
                    <div class="card-lessons">
                        
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
            <div className='enroll-btn'><button className='card-button-lesson'>Enroll</button></div>
            <div class="">
                {displayLessons()}
            </div>
        </div>
    )
}

export default Lessons