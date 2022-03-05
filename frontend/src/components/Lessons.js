import React, { useState, useEffect } from 'react'
import Backend from '../services/Backend'
import { Link, useParams } from 'react-router-dom'
import "../css/Categories.css"

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
                    <div class="card">
                        <img src={Lesson.tutorial.photo} alt="category" className="category-image"></img>
                        <div className="category-name"><h3 className="category-title">{Lesson.title}</h3></div>
                        <p className='category-description'>{Lesson.description}</p>                       
                        <button className='card-button'>See More</button>
                    </div>
                )
            })
        )
    }
    return (
        <div>
            <h1 className='get-started'>Let's Get Started!</h1>
            <h2 className='new-skill'>Learn a new skill online with a private tutor</h2>
            <h3 className='levels'>Beginner, Intermediate & Advanced</h3>
            <div class="flex-container wrap">
                {displayLessons()}
            </div>
        </div>
    )
}

export default Lessons