const jokeBtn = document.getElementById("joke-btn");
const jokeElement = document.getElementById("joke");

// Function to create an XML request.
function xmlRequest(url) {
    const jokeAPI = new XMLHttpRequest();
    jokeAPI.open("GET", `${url}`);
    return jokeAPI;
}

// Function to send the XML request.
function xmlSend(jokeAPI) {
    jokeAPI.send();
}

// Function to handle the XML connection and response.
function xmlConnection(jokeAPI) {
    jokeAPI.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            jokeElement.innerHTML = JSON.parse(this.responseText).value;
        } else
            jokeElement.innerHTML = "Not funny";
    }
}

// Function to start fetching a joke when the button is clicked.
function startJoke() {
    const jokeAPI = xmlRequest("https://api.chucknorris.io/jokes/random");
    xmlConnection(jokeAPI);
    xmlSend(jokeAPI);
}

// This function generates a random color code and sets it as the text color of the "jokeElement."
function changeRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    if (randomColor !== "#f5f5f5" && randomColor !== "#ffffff ") {
        jokeElement.style.color = `#${randomColor}`;
    }
}

// Event listeners
jokeBtn.addEventListener("click", changeRandomColor);
jokeBtn.addEventListener("click", startJoke);