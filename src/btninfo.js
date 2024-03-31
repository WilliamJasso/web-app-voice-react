import React from "react";
import "./btninfo.css";
import googleLogo from "./logo-google.png"; // Ruta a tu archivo de imagen del logo de Google
import chatGPTLogo from "./logo-chatgpt.png"; // Ruta a tu archivo de imagen del logo de ChatGPT
import youtubeLogo from "./logo-youtube.png"; // Ruta a tu archivo de imagen del logo de YouTube

function BtnInfo({ onClick }) {
  return (
    <div className="tooltip-container">
      <span className="tooltip">
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
