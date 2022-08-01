import React from 'react'
import { Button } from './Button'
import './heroSection.css'
import '../App.css'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="./videos/video-2.mp4" autoPlay loop muted> </video>
            <h1>ADVENTER AWAITS</h1>
            <p>What are you looking for</p>
            <div className="hero-btns">
                <Button className='btn' buttonStyle='btn--outline' buttonSize='btn-large' >
                    GET STARTED
                </Button>
                <Button className='btn' buttonStyle='btn--primary' buttonSize='btn-large' >
                    WATCH TRAILER <i className='far fa-play-circle'></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection