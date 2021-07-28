import React from 'react'
import Typewriter from 'typewriter-effect';
import { Navbar } from './Navbar';



export const Home = () =>
{
    return (
        <>
            <Navbar/>
            <div className='container home' id="home">
                <div className='row'>
                    <div className='col-md-4 col-sm-12 mx-auto ' data-aos="fade-right" id="hometext">

                        <h1>Hello 👋  ,</h1>
                        <h1> I'm Ragul </h1>
                        <h3>
                        {
                            <Typewriter

                                options={{
                                    strings: [`Full Stack Developer 💻`],
                                    autoStart: true,
                                    loop: true,
                                    cursorClassName: 'Typewriter__cursor',
                                    cursor: ''
                                }}

                            />
                        }
                        </h3>
                        <br/>
                        <a href='#contactus' className='btn btn-outline-success contact-button' style={{ borderRadius: "0px" }}>Get in Touch</a>
                    </div>
                    <div className='col-md-6 col-sm-12' data-aos="fade-left">
                        <img className='img-fluid'  src='https://res.cloudinary.com/drpwuzvax/image/upload/v1627407707/sujithabuilders/19362653-removebg-preview_vphiow.png' alt='image'></img>
                    </div>
                </div>
            </div>
        </>
    )
}
