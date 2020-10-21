import React from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";

const ringtonesJSON = require('../../data/ringtones.json');

const RingtonePage = () => {

    const playRingtone = audioFilePath => {
        const audio = new Audio(audioFilePath);
        audio.play();
    }
    
    return (
        <div>
            <div className="ringtones">
                {ringtonesJSON.map(ringtone => (
                    <div key={ringtone.id} className="ringtone">
                        <Button
                            size="small"
                            variant="contained"
                            color='primary'
                            onClick={() => playRingtone(ringtone.path)}
                        >
                            {ringtone.title}
                        </Button>
                        <NavLink to={ringtone.path} target="_blank" download>Download</NavLink>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default RingtonePage;