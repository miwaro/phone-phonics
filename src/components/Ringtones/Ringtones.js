import React from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const ringtonesJSON = require('../../data/ringtones.json');

const RingtonePage = () => {

    const playRingtone = audioFilePath => {
        const audio = new Audio(audioFilePath);
        audio.play();
    }

   

    return (
        <div className="main-container">
            <div className="ringtone-grid">
                {ringtonesJSON.map(ringtone => (
                    <div key={ringtone.id} className="ringtone-container">
                        <img src={ringtone.img} alt="nature"/>
                        <Button
                            style={{position: 'absolute', top: 10, left: 10, color: '#FFF'}}
                            size="large"
                            variant="outlined"
                        >
                            {ringtone.title}
                        </Button>
                        <button className="play-button" onClick={() => playRingtone(ringtone.path)}>
                            <PlayArrowIcon 
                                fontSize="large"
                            />
                        </button>
                        <NavLink className="download-link" to={ringtone.path} target="_blank" download>Download Ringtone</NavLink>
    
                    </div>
                ))}

            </div>
        </div>
    )
}

export default RingtonePage;