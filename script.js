// Отримання посилань на HTML-елементи
var textToSpeechInput = document.getElementById("text-to-speech");
var speakButton = document.getElementById("speak-button");

// Функція для озвучення тексту
function speakText() {
  var text = textToSpeechInput.value;

  if (text !== "") {
    // Виклик ResponsiveVoice.js для озвучення тексту українською мовою
    responsiveVoice.speak(text, "Ukrainian Female");
  }
}

// Обробник події для кнопки озвучення
speakButton.addEventListener("click", speakText);
