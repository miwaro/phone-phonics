import React from 'react';
import Button from '@material-ui/core/Button';

const ringtonesJSON = require('../../data/ringtones.json');

const RingtonePage = () => {

    const playRingtone = audioFilePath => {
        const audio = new Audio(audioFilePath);
        audio.play();
    }

    const downloadRingtone = downloadFile => {
        const download = new Audio(downloadFile);
        download.play();
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
                        <Button
                            size="small"
                            variant="contained"
                            color='secondary'
                            onClick={() => playRingtone(ringtone.download)}
                        >
                            Download Ringtone
                        </Button>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default RingtonePage;