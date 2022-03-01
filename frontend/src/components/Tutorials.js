import React, { useEffect, useState } from "react";
import '../css/Tutorials.css';
import Backend from "../services/Backend";


function Tutorials() {
    const [tutorials, setTutorials] = useState([]);

    useEffect(() => {
        retrieveTutorials()
    }, []);

    const retrieveTutorials = () => {
        Backend.getTutorials()
            .then((response) => {
                setTutorials(response.data)
                console.log(response.data)
            }).catch((error) => {
                console.log(error);

            });
    }

    const displayTutorials = () => {
        return (
            tutorials.map((tutorial) => {
                return (
                    <div class="card">
                        <img src={tutorial.photo} alt="category" className="tutorial-image"></img>
                        <img src={tutorial.trainerId.photo} alt="category" className="tutorial-imagesmall"></img>
                        
                        <div className="tutorial-titles">
                        <div className="tutorial-name"><h3 className="tutorial-title">{tutorial.subCategories.name}</h3></div>
                        <div className="tutorial-price"><h3 className="tutorial-title">{tutorial.pricePerLesson}/hr</h3></div>
                        </div>
                        <p className='tutorial-maintitle'>{tutorial.title}</p>
                        <p className='tutorial-description'>{tutorial.description}</p>
                        <button className='tutorial-button'>More</button>
                    </div>
                )
            })
        )
    }
    return (
        <div>
            <h1 className='get-started'>Check all tutorial and enroll</h1>
            <h2 className='new-skill'>__________Latest Tutorial__________</h2>
            <div class="flex-container wrap">
                {displayTutorials()}
            </div>
        </div>);
}
export default Tutorials