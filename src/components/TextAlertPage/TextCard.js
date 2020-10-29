import React, { useState, useCallback } from "react";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const TextCard = (text) => {

  const [value, setValue] = useState(false);
  const audio = new Audio(text.path);

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
      <div className="text-container">
        <img src={text.img} alt="nature" />
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
            {text.title}
          </AccordionSummary>
        <AccordionDetails>
          <div 
            style={{
              paddingTop: 10, 
              paddingRight: 10, 
              fontWeight: 600
            }}
          > 
          {text.artist}
          </div>
          <a rel="nofollow" href={text.site} target="_blank" >
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
          to={text.path}
          target="_blank"
          download
        >
          Download Text
        </NavLink>
      </div>
    </div>
  );
};

export default TextCard;
