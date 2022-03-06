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
            video: "/sax.mp4",
            title: "Sax",
            description: "Music is the moonlight in the gloomy night of life"
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