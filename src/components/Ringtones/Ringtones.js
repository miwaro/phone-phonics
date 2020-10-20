import React, { useState } from 'react';
import randomize from '../../audioclips/randomize.wav';
import Button from '@material-ui/core/Button';

const ringtonesJSON = require('../../data/ringtones.json');


const RingtonePage = () => {

    const [ringtones, setRingtones] = useState(ringtonesJSON);

    const playRingtone = () => {
        playSound(randomizeAudio);
    }

    const randomizeAudio = new Audio(ringtones.path);

    const playSound = audioFile => {audioFile.play()};

    


    // function playRingtone() {

    //     setRingtones(prevRingtone => prevRingtone.path)
    // }


    return (
        <div>

            <div className="ringtones">
                {ringtones.map(ringtone => (
                    <div key={ringtone.id} className="ringtone">
                        <Button
                            size="small"
                            variant="contained"
                            color='primary'
                            onClick={playRingtone}>
                            {ringtone.title}
                            {/* {ringtone.fileName} */}
                        </Button>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default RingtonePage;