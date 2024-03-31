import React, { useState } from "react";
import "./App.css";
import Header from "./header";
import Loader from "./loader";
import BtnInfo from "./btninfo";
import microphoneIcon from "./icon-mic.png"; // Importa la imagen del icono del micrófono
import "./btn.css";

function App() {
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [recognizedText, setRecognizedText] = useState("");
  const [textRecognized, setTextRecognized] = useState(false);
  const keywords = [
    "abre una pestaña",
    "abre google",
    "modificar tamaño ventana",
    "cerrar pestaña",
    "cerrar navegador",
    "busca en google",
    "abre chat gpt",
    "abre youtube",
    "busca en youtube",
  ];
  const defaultWidth = 800; // Ancho predeterminado para la ventana del navegador
  const defaultHeight = 600; // Altura predeterminada para la ventana del navegador

  const handleClick = () => {
    setIsListening(true);
    setIsLoading(true); // Mostrar el Loader cuando se inicia el reconocimiento de voz
    recognizeSpeech();
  };

  const recognizeSpeech = () => {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.lang = "es-ES";

    recognition.onresult = function (event) {
      const transcript = event.results[0][0].transcript.toLowerCase(); // Convertir a minúsculas
      setRecognizedText(transcript);
      setTextRecognized(true); // Establecer el estado textRecognized a true cuando se reconoce el texto

      // Buscar la palabra específica en el texto reconocido
      for (const keyword of keywords) {
        if (transcript.includes(keyword.toLowerCase())) {
          // Convertir la palabra clave a minúsculas
          // Realizar acciones según la palabra clave identificada
          switch (keyword) {
            case "abre una pestaña":
              window.open("about:blank", "_blank");
              break;
            case "abre google":
              window.open("https://www.google.com.mx", "_blank");
              break;
            case "abre chat gpt":
              window.open("https://chat.openai.com/", "_blank");
              break;
            case "modificar tamaño ventana":
              window.resizeTo(defaultWidth, defaultHeight);
              break;
            case "cerrar pestaña":
              window.close();
              break;
            case "cerrar navegador":
              window.open("", "_self").close();
              break;
            case "busca en google": // Nuevo caso
              const searchQuery = transcript.replace("busca en google", "").trim();
              if (searchQuery !== "") {
                const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
                window.open(googleSearchURL, "_blank");
              }
              break;
            case "abre youtube": // Nuevo caso
              window.open("https://www.youtube.com", "_blank");
              break;
            case "busca en youtube": // Nuevo caso
              const searchQueryYouTube = transcript.replace("busca en youtube", "").trim();
              if (searchQueryYouTube !== "") {
                const youTubeSearchURL = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQueryYouTube)}`;
                window.open(youTubeSearchURL, "_blank");
              }
              break;
            default:
              break;
          }
          break;
        }
      }

      // Restaurar el estado textRecognized a false después de 5 segundos
      setTimeout(() => {
        setTextRecognized(false);
      }, 3000);
    };

    recognition.onerror = function (event) {
      setRecognizedText(
        "Error en el reconocimiento de voz. Intenta nuevamente."
      );
    };

    recognition.onend = function () {
      setIsListening(false);
      setIsLoading(false); // Ocultar el Loader cuando se detiene el reconocimiento de voz
    };

    recognition.start();
  };
  return (
    <div>
      <Header />
      <div className="App">
        <p>Haz click en el botón y di una orden ...</p>
        <button
          id="voiceBtn"
          className={`Btn ${isListening ? "active" : ""}`}
          onClick={handleClick}
          disabled={isListening}
        >
          <img src={microphoneIcon} alt="Microphone" />{" "}
          {/* Icono de micrófono */}
        </button>
        {isLoading && <Loader />}
        <div
          id="result"
          className={`Result ${textRecognized ? "recognized" : ""}`}
        >
          <p>
            Orden identificada: <strong>{recognizedText}</strong>
          </p>
        </div>
        <BtnInfo />
      </div>
    </div>
  );
}

export default App;
