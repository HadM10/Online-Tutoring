import React, { useEffect } from 'react'
import '../css/Banner.css'

function Banner() {

    const banners = [
        {
            video: "Piano.mp4",
            title: "Music",
            description: "Music is the moonlight in the gloomy night of life"
        },
        {
            video: "sax.mp4",
            title: "Music",
            description: "Music is the moonlight in the gloomy night of life"
        }
    ]
    let newBanner = banners[0]
    useEffect(() => {
        bannerInterval()
    }, [])

    const bannerInterval = () => {
        setInterval(() => {
            let randomBanner = Math.random() * (banners.length - 1) + 1;
            newBanner = banners[randomBanner]
            console.log(newBanner)
        }, 5000)   
    return newBanner
    }

    return (
        <>
            <header className='banner'>
                <video className="video" autoPlay muted loop>
                    <source src={newBanner.video} type="video/mp4" />
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