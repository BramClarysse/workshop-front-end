# Frontend Workshop Lab

In this lab, you'll be creating HTTP requests for three different sections: "Hello World", "Random Number", and "Char Length". For each section you'll add event listeners to request buttons and clear buttons.

If you're stuck or don't understand an error then feel free to ask for help.

## Instructions

1. Open the provided HTML file (`index.html`) in your text editor.
2. Inside the JavaScript file (`script.js`), complete the following steps for each section:

    - **Hello World:**
        - Add an event listener to the "Send Request" button (`#hello-world-button`) to call the `sendHelloWorldRequest()` function.
        - Add an event listener to the "Clear" button (`#hello-world-clear`) to call the `clearOutput()` function.

    - **Random Number:**
        - Similar to the "Hello World" section, add event listeners for the "Send Request" button (`#random-number-button`) and the "Clear" button (`#random-number-clear`).

    - **Char Length:**
        - Again, add event listeners for the "Send Request" button (`#char-length-button`) and the "Clear" button (`#char-length-clear`).

3. Inside the JavaScript file, implement the following functions:
    - `sendHelloWorldRequest()`: This function should make an HTTP request to retrieve "Hello World" from the express.js api and display it in the corresponding output element (`#hello-world-output`).
    - `sendRandomNumberRequest()`: Implement an HTTP request with the random number endpoint and display it in the corresponding output element (`#random-number-output`).
    - `sendCharLengthRequest()`: Implement an HTTP request that takes a parameter with the char length endpoint, displaying the result in the corresponding output element (`#char-length-output`).
    - `clearOutput(selector)`: This function clears the content of the specified output element. You can reuse this so no need to change this.

    Example HTTP fetch request:
    ```javascript
    function sendHTTPRequest() {
        fetch('/api/endpoint')
            .then(response => response.text())
            .then(data => {
                const myElement = document.querySelector('#my-element');
                myElement.textContent = data;
            })
            .catch(error => {
            const myElement = document.querySelector('#my-element');
            myElement.textContent = 'Error: ' + error.message;

            console.log(error);
        });    
    }
    ```


4. Test your implementation by opening the HTML file in a web browser. Verify that clicking the "Send Request" buttons displays the expected output and that clicking the "Clear" buttons clears the output.

5. Once you've completed the implementation and verified its functionality, you've successfully completed the lab!

Good luck!
