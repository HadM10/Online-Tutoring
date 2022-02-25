import React from 'react'
import '../css/Banner.css'

function Banner() {
    return (
        <header className='banner'>
                  <video className="video" controls autoPlay muted loop>
                <source src="sax.mp4" type="video/mp4" />
            </video>
        </header>
    )
}

export default Banner