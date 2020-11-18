import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const AboutPage = () => {
    return (

        <div className="about-main">
          <div className="about-container">
            <ul className={'list'}>
                <li>Free Ringtones</li>
                <li>Free Text Alerts</li>
                <li>Discover New Music</li>
            </ul>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <h2 className="about-header">
                        What is Phone Phonics?
                    </h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p>Phone Phonics is a place where you can download free ringtones and text alerts that either my friends or I produced.
                        For additional information about the artist, be sure to click on the title of the sound.
                        Thanks for checking out my website!
                    </p>
                </AccordionDetails>
            </Accordion>
       
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <h2 className="about-header">Why?</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p>If you're like me, you've probably had the same ringtone for years.  
                        It's so simple to change that. Simply plug your phone into the computer and download the file.
                    </p>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                     <h2 className="about-header">Who?</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p>As of right now, most of the sounds are ones that I have personally composed. I have also included 
                        a few of my friends' sounds as well.
                        In the future, I would love to implement an upload feature where any music artist could post their track.
                    </p>
                </AccordionDetails>
            </Accordion>
           
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                     <h2 className="about-header">How?</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p>I got my first guitar when I was 14 years old and started recording a few years later.  
                        I now use a digital audio workstation (DAW) called Studio One, which is a powerful tool to help compose unique sounds.
                    </p>
                </AccordionDetails>
            </Accordion>
           
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <h2 className="about-header">Contact Info</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p>For more information about me, my music, or my friends music, please email me at mikerooze12@gmail.com</p>
                </AccordionDetails>
            </Accordion>
          </div>
        </div>
    )
}

export default AboutPage;