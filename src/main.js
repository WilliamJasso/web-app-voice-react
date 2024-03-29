document.addEventListener("DOMContentLoaded", function () {
    const voiceBtn = document.getElementById("voiceBtn");
    const resultDiv = document.getElementById("result");
    const keyword = "tamaño 3"; // La palabra específica que deseas buscar
    const controlTexto = document.getElementById("controlTexto");
  
    voiceBtn.addEventListener("click", function () {
      recognizeSpeech();
    });
  
    function recognizeSpeech() {
      const recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognition.lang = "es-ES";
  
      recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript;
        resultDiv.innerHTML = `<p>Orden identificada: <strong>${transcript}</strong></p>`;
  
        // Buscar la palabra específica en el texto reconocido
        if (transcript.toLowerCase().includes(keyword.toLowerCase())) {
          // Si la palabra específica está presente en el texto, hacer algo
          console.log("La palabra específica fue identificada en el texto.");
          controlTexto.classList.add("fs-3");
        }
      };
  
      recognition.onerror = function (event) {
        resultDiv.innerHTML =
          "<p>Error en el reconocimiento de voz. Intenta nuevamente.</p>";
      };
  
      recognition.start();
    }
  });
  
  
  