import React from 'react'
import './About.css';


const About = () => {
    return (
        <div>
            <h1 >About the app</h1>

                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="local_container carousel-item ">
                     <img src="./logo512.png"  alt="..."/>
                    </div>
                    <div className="local_container carousel-item active">
                        <p className="text-about">The app was developed during the bootcamp course. It was the first project built after learning React. <br/>
                        The app consists in calling an external API that provides information about the current weather of any city in the world. The cities get accumulated in several cards in the "cards" section.
                        <br /> The technologies used are React.js, JavaScript, HTML and CSS.</p>
                    </div>
                    {/* <div class="carousel-item">
                        <img src="#" class="d-block w-100" alt="..."/>
                    </div> */}
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
    )
}

export default About
