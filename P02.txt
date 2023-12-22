Project 01


Components
==========
Main.js
-------
import React from "react"

export default function Main() {
    return (
        <main>
            <h1 className = "bodyHeader">Fun facts about React</h1>
            <ul className = "bodyContent">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img src = "./images/react-icon-small.png" className = "bodyLogo" />
        </main>
    )
}

Navbar.js
---------
import React from "react"

export default function Navbar() {
    return (
        <nav>
            <img src = "../images/react-icon-small.png" className = "logo"/>
             <h3 className = "navHeader01">ReactFacts</h3>
             <h4 className = "navHeader02">React Course - Project 1</h4>
        </nav>
    )
}

images
==========
images
react-icon-small.png

App.js
======
import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Main />
        </div>
    )
}


index.html
==========
<html>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div id="root"></div>
        <script src="index.pack.js"></script>
    </body>
</html>

style.css
==========
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Inter, sans-serif;
    background-color: #282D35;
}

nav {
    display: flex;
    align-items: center;
    background-color: #21222A;
    height: 90px;
    padding: 30px 25px;
}

.navHeader01, .navHeader02 {
    margin: 0;
}

.navHeader01 {
    margin-right: auto;
    color: #61DAFB;
    font-weight: 700;
    font-size: 25px;
}

.navHeader02 {
    margin-right: right;
    color: #DEEBF8;
    font-weight:600;
}

.logo {
    height: 30px;
    margin-right: 7px;
}

main{
    padding: 57px 27px;
    color: white;
}

.bodyHeader {
    margin: 0;
    font-size: 39px;
    letter-spacing: -0.05em;
}

.bodyContent {
    margin-top: 46px;
    max-width: 400px;
}

.bodyContent > li {
    line-height: 19px;
    padding-block: 10px;
}

.bodyContent > li::marker {
    font-size: 1.4rem;
    color: #61DAFB;
}

.bodyLogo{
    width: 60%;
    opacity: 0.1;
    
}

/*
main {
    padding: 57px 27px;
    color: white;
    background-image: url(./images/react-icon-large.png);
    background-repeat: no-repeat;
    background-position: right 75%;
}

*/

index.js
==========
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(
	<App />, document.getElementById("root")
)
