import React from 'react';
import '../App.css';
import '../styles/Home.css';

const Home = () => {
    return (
        <div>
            <div className="hero-image">
            <img src="./hero.png" alt="Hero" />
            
            <div className="about-me">
                <h2>About Me</h2>
                <p>I'm coming from a world that beautifully blends design and coding. I've had the privilege of working with non-profit organizations, pouring my heart into it. Blogging? Oh, you bet! Writing and food are my passion points, so I've dabbled a bit in that world too.
                    <br />
                    <br />
                    Now, let's talk about dreams. I've always aspired to be a full-stack developer, but once I stepped into the industry, I realized just how intricate the process is between a client's vision and the actual website design. This realization sparked a little flame of inspiration in me.
                    <br />
                    <br />
                    I thrive on the thrill of trial and error, relish the challenge of conjuring up innovative solutions, and relentlessly work on my user-centric skills. Curious to know more about this creative mind? Reach out, and let's connect! 
                </p>

            </div>
            </div>
        </div>
    );
};

export default Home;
