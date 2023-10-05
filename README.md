# Joke-Generator-mini-project
This code contains basic JavaScript functions used to fetch joke data on a web page using a button named "joke-btn." This code is used to fetch joke data when the user clicks the "joke-btn" button and displays this data in an HTML element named "joke." If the request is not successful, it displays a "Not funny" message.
1. We select HTML elements with the ids "joke-btn" and "joke."
2. We create a function named "xmlRequest" that takes a URL and creates an XMLHttpRequest object.
3. We create a function named "xmlSend" that takes an XMLHttpRequest object and sends the request.
4. We create a function named "xmlConnection" that takes an XMLHttpRequest object and monitors the request's status. When a response is received, it adds the joke data to the HTML content.
5. We create a function named "startJoke." This function creates a request with "xmlRequest," establishes the request connection with "xmlConnection," and sends the request with "xmlSend."
6. Finally, we listen for a click event on the "joke-btn" button and call the "startJoke" function when the button is clicked.


