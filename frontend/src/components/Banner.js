import React from 'react'
import '../css/Banner.css'

function Banner() {
    return (
        <>
            <header className='banner'>
                <video className="video" autoPlay muted loop>
                    <source src="Piano.mp4" type="video/mp4" />
                </video>
                <div className='banner-content'>
                    <h1 className='banner-title'>Music</h1>
                    <h1 className='banner-description'> Music is the moonlight in the gloomy night of life</h1>
                    <button className='banner-button'> Learn More</button>
                </div>

                <div className="banner--fadeBottom"></div>
            </header>

        </>
    )
}

export default Banner