import React from 'react';

const AboutPage = () => {
    return (
        <div className="about-main">
          <div className="about-container">
            <h1 className="about-header">
                What is the point of any of this?
            </h1>
            <p>Phone Phonics is a site I built to showcase snippets of my songs as well as some of my friends which just so happen to make as really unique ringtones.
                As I learn more about backend technology I will implement a feature that allows the user to upload a ringtone or text alert.  Thanks for checking out my page.
                Feel free to check out some of my friends music by clicking on the title of the ringtone or text
            </p>
            <img className="soundcloud" src="./img/soundcloud.png" alt="soundcloud"/>
            <img className="studio" src="./img/studioOne.png" alt="soundcloud"/>
          </div>
        </div>
    )
}

export default AboutPage;