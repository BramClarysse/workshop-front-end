"use strict"

document.addEventListener('DOMContentLoaded', function() {
    // Hello World
    const helloWorldReqButton = document.querySelector("#hello-world-button");
    const helloWorldClear = document.querySelector("#hello-world-clear");
    const helloWorldOutput = document.querySelector("#hello-world-output");

    helloWorldReqButton.addEventListener('click', sendHelloWorldRequest);
    helloWorldClear.addEventListener('click', function() {
        clearOutput(helloWorldOutput);
    });

    // Random Number
    const randomNumberReqButton = document.querySelector("#random-number-button");
    const randomNumberClear = document.querySelector("#random-number-clear");
    const randomNumberOutput = document.querySelector("#random-number-output");

    randomNumberReqButton.addEventListener('click', sendRandomNumberRequest);
    randomNumberClear.addEventListener('click', function() {
        clearOutput(randomNumberOutput);
    });

    // Char Length
    const charLengthReqButton = document.querySelector("#char-length-button");
    const charLengthClear = document.querySelector("#char-length-clear");
    const charLengthOutput = document.querySelector("#char-length-output");

    charLengthReqButton.addEventListener('click', sendCharLengthRequest);
    charLengthClear.addEventListener('click', function() {
        clearOutput(charLengthOutput);
    });
});

function sendHelloWorldRequest() {
    const outputElement = document.querySelector('#hello-world-output');

    fetch('http://localhost:3000/helloworld')
            .then(response => response.text())
            .then(data => {
                outputElement.textContent = data;
            })
            .catch(error => {
                const outputElement = document.querySelector('#hello-world-output');
                outputElement.textContent = 'Error: ' + error.message;

                console.log(error);
            });
}

function sendRandomNumberRequest() {
    const outputElement = document.querySelector('#random-number-output');

    
    fetch('http://localhost:3000/randomnumber')
            .then(response => response.text())
            .then(data => {
                console.log(data);
                outputElement.textContent = data;
            })
            .catch(error => {
                const outputElement = document.querySelector('#random-number-output');
                outputElement.textContent = 'Error: ' + error.message;

                console.log(error);
            });
}

function sendCharLengthRequest() {
    const outputElement = document.querySelector('#char-length-output');
    const inputElement = document.querySelector('#input-field');

    fetch(`http://localhost:3000/howlongisthisstring?string=${inputElement.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            outputElement.textContent = data.length;
        })
        .catch(error => {
            outputElement.textContent = 'Error: ' + error.message;
            console.log(error);
        });
}

function clearOutput(selector) {
    selector.textContent ="";
}
