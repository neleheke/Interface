var text = document.getElementById("job").value;

if (text.value == "Astronaut") {
    alert("Jajaja")
}

var img = document.getElementById("img")

function checkInput() {
    const job = "Astronaut";
}

// Das Eingabefeld und das Ausgabefeld abrufen
const inputField = document.getElementById('inputField');
const resultDiv = document.getElementById('result');

// Den aktuellen Wert des Eingabefelds abrufen
const inputValue = inputField.value;

// Prüfen, ob das eingegebene Wort dem Zielwort entspricht
if (inputValue === job) { 
    // Wenn ja, das Bild hinzufügen
    const img = document.createElement('img');
    img.src = "C:\Users\musik\Desktop\download20190803230901.png";
    img.alt = 'Beispielbild';

    // Das alte Ergebnis löschen und das neue Bild hinzufügen
    resultDiv.innerHTML = '';
    resultDiv.appendChild(img);
} else {
    // Andernfalls eine Nachricht zeigen
    resultDiv.innerHTML = 'Kein Bild für dieses Wort.';
}

