import React, { useState } from "react";
import "./btninfo.css";
import googleLogo from "./logo-google.png";
import chatGPTLogo from "./logo-chatgpt.png";
import youtubeLogo from "./logo-youtube.png";

function BtnInfo() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
    >
      <span className={`tooltip ${isTooltipVisible ? "visible" : ""}`}>
        <div className="tooltip-title"> Dime: </div>
        <div className="tooltip-item">"Abre una pestaña"</div>
        <br />
        {/* Logo de google */}
        <div className="Logo">
          <img src={googleLogo} alt="Google Logo" />
        </div>
        <div className="tooltip-item"> "Abre google"</div>
        <div className="tooltip-item"> "Busca en google..."</div>
        {/* Logo de chatgpt */}
        <br />
        <div className="Logo">
          <img src={chatGPTLogo} alt="ChatGPT Logo" />
        </div>
        <div className="tooltip-item">"Abre chat gpt"</div>
        <br />
        {/* Logo de youtube */}
        <div className="Logo">
          <img src={youtubeLogo} alt="YouTube Logo" />
        </div>
        <div className="tooltip-item">"Abre YouTube"</div>
        <div className="tooltip-item"> "Busca en YouTube..."</div>
      </span>
      <span className="text">Como usarlo? 🤔 </span>
    </div>
  );
}

export default BtnInfo;
