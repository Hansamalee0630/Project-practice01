index.html
==========
<html>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div id="root"></div>
        <script src="index.pack.js"></script>
    </body>
</html>


index.js
========

import React from "react"
import ReactDOM from "react-dom"

function App() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfTheDay

    if(hours < 12) {
	timeOfTheDay = "morning"
    }
    else if (hours >= 12 && hours < 18) {
	timeOfTheDay = "afternoon"
    }
    else {
	timeOfTheDay = "night"
    }

    return (
        <h1>Good {timeOfTheDay}</h1>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
