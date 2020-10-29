import React from 'react';

const AboutPage = () => {
    return (
        <div className="about-main">
          <div className="about-container">
            <h2 className="about-header">
                What is Phone Phonics?
            </h2>
        
            <ul className={'list'}>
                <li>Free Ringtones</li>
                <li>Free Text Alerts</li>
                <li>Discover New music</li>
            </ul>
            <p>Phone Phonics is a place where you can download free ringtones and text alerts that either my friends or I produced.
                For additional information about the artist, be sure to click on the title of the sound.
                Thanks for checking out my website!
            </p>
            <hr/>
            <h2 className="about-header">Why?</h2>
                <p>If you're like me, you've probably had the same ringtone for years.  
                    It's so simple to change that. Simply plug your phone into the computer and download the file.
                </p>
                <hr/>
            <h2 className="about-header">Who?</h2>
                <p>As of right now, most of the sounds are ones that I have personally composed. I have also included 
                    a few of my friends' sounds as well.
                    In the future, I would love to implement an upload feature where any music artist could post their track.
                </p>
                <hr/>
            <h2 className="about-header">How?</h2>
                <p>I got my first guitar when I was 14 years old and started recording a few years later.  
                    I now use a digital audio workstation (DAW) called Studio One, which is a powerful tool to help compose unique sounds.
                </p>
                <hr/>
            <h2 className="about-header">Contact Info</h2>
                <p>For more information about me, my music, or my friends music please email me at mikerooze12@gmail.com</p>
                <hr/>
            <div className="about-images">
                <a  rel="nofollow" href="https://soundcloud.com/mikerooze" target="_blank" ><img className="soundcloud" src="./img/soundcloud.png"  alt="soundcloud"/></a>
                <a rel="nofollow" href="https://www.presonus.com/products/Studio-One" target="_blank"><img className="studio" src="./img/studioOne.png" alt="soundcloud"/></a>
            </div>

          </div>
        </div>
    )
}

export default AboutPage;