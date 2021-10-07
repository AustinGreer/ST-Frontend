import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div className="landing-screen">
            <div className="intro-wrapper">
                <div className="intro-text">
                    <h1>Sleep Better,<br /> Sleep Smarter</h1>
                    <p>Not everyone needs 8 hours of sleep, but how do you know if you're someone lucky enough to need only 6? or an unlucky one that needs 10?! Enter Sleep Tracker.</p>
                    <Link to="/login">Get Started Today</Link>
                </div>
                <img src="/assets/sleep_smart.png" alt="sleep-tracker-img" />
            </div>
        </div>
    )
}

export default Landing