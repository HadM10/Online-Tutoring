import React, { useEffect, useState, useRef } from 'react'
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
    const [newBanner, setNewBanner] = useState(banners[0])
    const [count, setCount] = useState(0)

    useEffect(() => {
        bannerInterval()
    }, [])

    const bannerInterval = () => {
        setInterval(() => {
            // let banner = banners[Math.floor(Math.random()*banners.length)];
            if(count < banners.length) {
                setCount(count+1);
                setNewBanner(banners[count])
                console.log(count)
            }
            else{
                setCount(0)
                setNewBanner(banners[0])
                console.log("else")
            }
           
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