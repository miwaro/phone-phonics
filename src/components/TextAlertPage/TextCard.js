import React, { useState, useCallback } from "react";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";
import Tooltip from '@material-ui/core/Tooltip';


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
        <Tooltip title={text.artist}>
        <Button
          style={{
            position: "absolute",
            top: 15,
            left: 15,
            color: "#FFF",
            fontStyle: "italic",
            cursor: 'default'
          }}
          size="large"
        >
          {text.title}
        </Button>
        </Tooltip>
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
