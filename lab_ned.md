# Frontend Workshop Lab

In dit lab ga je HTTP-verzoeken maken voor drie verschillende secties: "Hello World", "Random Number", en "Char Length". Voor elke sectie voeg je eventlisteners toe aan de verzendknoppen en wissenknoppen.

Als je vastloopt of een foutmelding niet begrijpt, vraag dan gerust om hulp.

## Instructies

1. Open het meegeleverde HTML-bestand (`index.html`) in je teksteditor.
2. Binnen het JavaScript-bestand (`script.js`), voltooi de volgende stappen voor elke sectie:

    - **Hello World:**
        - Voeg een eventlistener toe aan de "Verzendverzoek" knop (`#hello-world-button`) om de `sendHelloWorldRequest()` functie aan te roepen.
        - Voeg een eventlistener toe aan de "Wissen" knop (`#hello-world-clear`) om de `clearOutput()` functie aan te roepen.

    - **Random Number:**
        - Vergelijkbaar met de "Hello World" sectie, voeg eventlisteners toe voor de "Send Request" knop (`#random-number-button`) en de "Clear" knop (`#random-number-clear`).

    - **Char Length:**
        - Voeg opnieuw eventlisteners toe voor de "Send Request" knop (`#char-length-button`) en de "Clear" knop (`#char-length-clear`).

3. Implementeer binnen het JavaScript-bestand de volgende functies:
    - `sendHelloWorldRequest()`: Deze functie moet een HTTP-verzoek maken om "Hello World" op te halen van de Express.js API en het weergeven in het overeenkomstige element (`#hello-world-output`).
    - `sendRandomNumberRequest()`: Implementeer een HTTP-verzoek met het random number endpoint en toon het resultaat in het overeenkomstige element (`#random-number-output`).
    - `sendCharLengthRequest()`: Implementeer een HTTP-verzoek dat een parameter met het char length endpoint meeneemt, waarbij het resultaat in het overeenkomstige element (`#char-length-output`) wordt weergegeven.
    - `clearOutput(selector)`: Deze functie wist de inhoud van het gespecificeerde uitvoerelement. Je kunt dit hergebruiken dus is geen noodzaak om dit te veranderen.

    Voorbeeld HTTP fetch request
    ```javascript
    function sendHelloWorldRequest() {
        fetch('/api/endpoint')
            .then(response => response.text())
            .then(data => {
                const myElement = document.querySelector('#my-element');
                myElement.textContent = data;
            })
            .catch(error => {
                const myElement = document.querySelector('#my-element');
                myElement.textContent = 'Fout: ' + error.message;

                console.log(error);
            });
    }
    ```

4. Test je implementatie door het HTML-bestand te openen in een webbrowser. Verifieer dat het klikken op de "Send Request" knoppen het verwachte resultaat toont, en dat het klikken op de "Clear" knoppen de uitvoer wist.

5. Zodra je de implementatie hebt voltooid en de functionaliteiten werken, heb je het lab succesvol afgerond!

Veel succes!
