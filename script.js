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
    outputElement.textContent = 'No HTTP request made yet';
}

function sendRandomNumberRequest() {
    const outputElement = document.querySelector('#random-number-output');
    outputElement.textContent = 'No HTTP request made yet';
}

function sendCharLengthRequest() {
    const outputElement = document.querySelector('#char-length-output');
    outputElement.textContent = 'No HTTP request made yet';
}

function clearOutput(selector) {
    selector.textContent ="";
}
