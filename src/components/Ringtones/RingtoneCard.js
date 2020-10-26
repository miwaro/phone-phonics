import React, { useState, useCallback } from "react";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";

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
        <Button
          style={{
            position: "absolute",
            top: 15,
            left: 15,
            color: "#FFF",
            fontStyle: "italic"
          }}
          size="large"
        >
          {ringtone.title}
        </Button>
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
