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
    // Add the eventlisteners like in hello-world

    // Char Length
    // Add the eventlisteners like in hello-world

});

function sendHelloWorldRequest() {
    //make it a working http request, so clear the static code
    const outputElement = document.querySelector('#hello-world-output');
    outputElement.textContent = 'No HTTP request made yet';
}

function sendRandomNumberRequest() {
    //write your http request here (or split up into cleaner code)
}

function sendCharLengthRequest() {
    //write your http request with a parameter here (or split up into cleaner code)
}

function clearOutput(selector) {
    selector.textContent ="";
}
