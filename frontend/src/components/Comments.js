import React, { useEffect, useState } from "react";
import '../css/Comments.css';
import Backend from "../services/Backend";


function TraineeComments() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        retrieveComments()
    }, []);

    const retrieveComments = () => {
        Backend.getComments()
            .then((response) => {
                setComments(response.data)
                console.log(response.data)
            }).catch((error) => {
                console.log(error);
            });
    }

    const displayData = () => {
        return (
            comments.map((comment) => {
                return (
                    <div className="comment-box"  >
                        <div className="comment--collectionpictures">
                            <img className="comment--picture" src={comment.receiver.photo} alt={"photo not available"} />
                            <img className="comment--sidepicture" src="https://www.dummies.com/wp-content/uploads/494382.image1.jpg" alt={"photo not available"} />
                        </div>
                        <p className="comment--linedivider"> _________________________________________ </p>
                        <p className="comment--commentname"> {comment.receiver.fname + " " + comment.receiver.lname} - <strong className="italic"> Top Student</strong> </p>
                        <p className="comment--message"> {comment.message} </p>
                    </div>

                )
            })
        )
    }
    return (<div className="comment-container">
        <h1 className="comment-title"> What they Say!</h1>
        <div className="comment-main">{displayData()}</div>
    </div>);
}
export default TraineeComments