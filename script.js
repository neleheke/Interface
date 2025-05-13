var text = document.getElementById("job").value;

if (text.value == "Astronaut") {
    alert("Jajaja")
}

function checkInput() {
        // Das spezifische Wort, nach dem gesucht wird
        const targetWord = 'Astronaut';
        
        // Das Eingabefeld und das Ausgabefeld abrufen
        const inputField = document.getElementById('inputField');
        const resultDiv = document.getElementById('result');

        // Den aktuellen Wert des Eingabefelds abrufen
        const inputValue = inputField.value;

        // Prüfen, ob das eingegebene Wort dem Zielwort entspricht
        if (inputValue === targetWord) {
            // Wenn ja, das Bild hinzufügen
            const img = document.createElement('img');
            img.src = "download20190803230901.png"; // Beispielbild
            img.alt = 'Beispielbild';
            
            // Das alte Ergebnis löschen und das neue Bild hinzufügen
            resultDiv.innerHTML = '';
            resultDiv.appendChild(img);
        } else {
            // Andernfalls eine Nachricht zeigen
            resultDiv.innerHTML = 'Kein Bild für dieses Wort.';
        }
    }