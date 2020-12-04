import React, { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import Favorites from '../Favorites/Favorites';

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

const RingtoneCard = (ringtone) => {

  const [value, setValue] = useState(false);
  const [titles, setTitles] = useState([]);

  const audio = new Audio(ringtone.path);

  const toggle = useCallback(() => {
      toggleAudio();
      setValue((v) => !v);
  }, []);

  const toggleAudio = () => {

    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }

  audio.addEventListener("ended", function() {
    if ("ended") {
      setValue(false)
    }
  })

  const addTitleHandler = title => {
    setTitles(prevTitles => [
      ...prevTitles,
      { id: Math.random().toString(), ...title }
    ]);
  };

  return (
    <div>
      <div className="ringtone-container">
        <img src={ringtone.img} alt="nature" />
        <Accordion  
          style={{
              position: "absolute",
              borderRadius: 6,
              top: 15,
              left: 15,
              opacity: .8,
              fontStyle: "italic",
              border: '1px solid #207db8'
            }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <MusicNoteIcon fontSize='small'/>
            {ringtone.title}
          </AccordionSummary>

          <AccordionDetails style={{paddingTop: 0, paddingBottom: 0}}>
            <ul className='accordion-list'>
              <li style={{transform: 'Translate(0, -30px)'}}>
                {ringtone.artist}
                <a rel="noopener noreferrer" href={ringtone.site} target="_blank" >
                  <img className= 'soundcloud' src="./img/soundcloud.png"  alt="soundcloud"     
                    style={{
                      transform: 'translate(0, 30px)',
                      paddingLeft: 10,
                      paddingBottom: 20,
                      height:'28px', 
                      width:'28px'
                    }}  
                  />
                </a>
              </li>
              <Favorites title={ringtone.title} id={ringtone.id} onAddTitle={addTitleHandler}/>
            </ul>
          </AccordionDetails>

      </Accordion>
        <button className="play-button" onClick={() => toggle()}>
          {value ? <StopIcon /> : <PlayArrowIcon />}
        </button>
        <NavLink
          className="download-link"
          to={ringtone.path}
          target="_blank"
          download
        >
          Download Ringtone
        </NavLink>
      </div>
    </div>
  );
};

export default RingtoneCard;
