import React from "react";
import RingtoneCard from "./RingtoneCard";

const ringtonesJSON = require("../../data/ringtones.json");

const RingtonePage = () => {
  return (
    <div className="main-container">
      <div className="ringtone-grid">
        {ringtonesJSON.map((ringtone) => (
          <RingtoneCard
            key={ringtone.id}
            id={ringtone.id}
            path={ringtone.path}
            title={ringtone.title}
            img={ringtone.img}
            artist={ringtone.artist}
            site={ringtone.site}
          />
        ))}
      </div>
    </div>
  );
};

export default RingtonePage;
