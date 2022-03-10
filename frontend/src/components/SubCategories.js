import React, { useState, useEffect } from 'react'
import Backend from '../services/Backend'
import { Link, useParams } from 'react-router-dom'
import "../css/SubCategories.css"

function SubCategories() {
    const [SubCategories, setSubCategories] = useState([])
    const categoryId = useParams().id

    useEffect(() => {
        retrieveSubCategories()
    }, []);

    const retrieveSubCategories = () => {
        Backend.getSubCategories(categoryId)
            .then(response => {
                setSubCategories(response.data)
            })
            .catch(e => {
                console.log(e)
            })
    }
    const displaySubCategories = () => {
        return (
            SubCategories.map((SubCategory) => {

                return (
                    <>
                    {/* < div className = 'subCategory-banner' > <img className='subCategory-banner-image' src={SubCategory.categoryId.banner}></img></div >
                    <div className="subCategory-banner--fadeBottom"></div> */}
                        <div class="card">
                            <img src={SubCategory.photo} alt="category" className="category-image"></img>
                            <div className="category-name"><h3 className="category-title">{SubCategory.name}</h3></div>
                            <p className='category-description'>{SubCategory.description}</p>
                            <Link className='link-categories' to={`tutorials/${SubCategory._id}`}>
                                <button className='card-button'>See More</button>
                            </Link>
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
        <div class="flex-container wrap">
            {displaySubCategories()}
        </div>
    </div>
)
}

export default SubCategories