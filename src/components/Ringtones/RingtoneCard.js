import React, { useState, useCallback } from "react";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";
import Tooltip from '@material-ui/core/Tooltip';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const RingtoneCard = (ringtone) => {

  const [value, setValue] = useState(false);
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
              opacity: .9,
              fontStyle: "italic",
              border: '1px solid #207db8'
            }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {ringtone.title}
          </AccordionSummary>
        <AccordionDetails>
          <div 
            style={{
              paddingTop: 10, 
              paddingRight: 10, 
              fontWeight: 600
            }}
          > 
          {ringtone.artist}
          </div>
          <a rel="nofollow" href={ringtone.site} target="_blank" >
            <img className="soundcloud" src="./img/soundcloud.png" 
            style={{
              height:'40px', width:'40px'
            }} 
            alt="soundcloud"
            />
          </a>
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
