import React, { useEffect, useState, useRef } from 'react'
import '../css/Banner.css'

function Banner() {
   
    const banners = [
        {
            video: "/Piano.mp4",
            title: "Music",
            description: "Music is the moonlight in the gloomy night of life"
        },
        {
            video: "/cooking.mp4",
            title: "Cooking",
            description: "Real cooking is more about following your heart than following recipes"
        },
        {
            video: "/martialarts.mp4",
            title: "Martial Arts",
            description: "Given enough time, any man may master the physical. With enough knowledge, any man may become wise. It is the true warrior who can master both… and surpass the result"
        },
        {
            video: "/programming.mp4",
            title: "Programming",
            description: "The best error message is the one that never shows up"
        }
        
    ]
    const [newBanner, setNewBanner] = useState([])
    const videoRef = useRef();

    useEffect(() => {
        setNewBanner(
            banners[Math.floor(Math.random() * banners.length)]
        )
        videoRef.current?.load()
    }, [newBanner.video])

    return (
        <>
            <header className='banner'>
                <video ref={videoRef} className="video" autoPlay muted loop>
                    <source src={window.location.origin + newBanner.video} type="video/mp4" />
                </video>
                <div className='banner-content'>
                    <h1 className='banner-title'>{newBanner.title}</h1>
                    <h1 className='banner-description'>{newBanner.description}</h1>
                    <button className='banner-button'> Learn More</button>
                </div>

                <div className="banner--fadeBottom"></div>
            </header>

        </>
    )
}

export default Banner