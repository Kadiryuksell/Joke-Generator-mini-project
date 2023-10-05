# Joke-Generator-mini-project
This JavaScript code allows you to fetch Chuck Norris jokes from the Chuck Norris Joke API and display them on a web page. It also adds some fun by changing the text color randomly when you click a button.

##Features
Fetches Chuck Norris jokes from the API.
Changes the text color of the joke when you click the button.
Handles cases where the API request fails.

##Usage
###Include the HTML elements:
Create an HTML button element with the id "joke-btn".
Create an HTML element (e.g., a paragraph or a div) with the id "joke" where the joke text will be displayed.
###Include the JavaScript code:
Add the provided JavaScript code to your web page.
###Run the Application:
Open your web page in a web browser.
Click the "joke-btn" button to fetch and display a Chuck Norris joke.
Enjoy the random text color changes for added fun!

##Functions
xmlRequest(url): Creates an XML request with the specified URL.
xmlSend(jokeAPI): Sends the XML request.
xmlConnection(jokeAPI): Handles the XML connection and response.
startJoke(): Initiates the joke-fetching process when the button is clicked.
changeRandomColor(): Generates a random text color for the displayed joke.

##Event Listeners
Adds event listeners for the "click" event on the "joke-btn" button:
changeRandomColor(): Changes text color.
startJoke(): Fetches Chuck Norris jokes.


