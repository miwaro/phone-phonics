import React from "react";
import TextCard from "./TextCard";

const textsJSON = require("../../data/texts.json");

const TextAlertPage = () => {
  return (
    <div className="main-text-container">
      <div className="ringtone-grid">
        {textsJSON.map((text) => (
          <TextCard
            key={text.id}
            path={text.path}
            title={text.title}
            img={text.img}
            artist={text.artist}
            site={text.site}
          />
        ))}
      </div>
    </div>
  );
};

export default TextAlertPage;
