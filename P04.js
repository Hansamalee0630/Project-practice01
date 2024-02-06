Components
==========

Navbar.js
---------
import React from "react"

export default function Navbar(){
    return(
        <nav>
            <img src = "../images/airbnb-logo.png" className = "logo" />
        </nav>
    )
}

Hero
----
import React from "react"

export default function Hero(){
    return(
        <section className = "Hero">
            <img src = "images/photo-grid.png" className = "heroImage"/>
            <h1 className = "Body_Heading" >Online Experiences</h1>
            <p className = "Body_Paragraph" >Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

images
======
images/airbnb-logo.png

images/photo-grid.png

App.js
======
import React from "react"
import Navbar from "./Components/Navbar.js"
import Hero from "./components/Hero"

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
        </div>
    )
}

index.html
==========

<html>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap" rel="stylesheet">
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
import App from "./App"

ReactDOM.render(
    <App />, document.getElementById("root")
)

style.css
=========

* {
    box-sizing: border-box;
}

body {
    margin: 0;
}

nav {
    height: 70px;
    display: flex;
    padding: 20px 36px;
    box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1);
}

.logo {
    max-width: 100px;
}

.heroImage{
    max-width: 400px;
    align-self: center;
}

.Body_Heading{
    font-family: Inter, Poppins;
    color: #000;
    font-size: 36px;
    line-height: 110%; /* 39.6px */
}

.Body_Paragraph{
    font-family: Inter, Poppins;
    margin: 10px;
    line-height: 110%; /* 17.6px */
    width: 320px;
    height: 56px;
    flex-shrink: 0;
}

section {
    padding: 20px;
}

.Hero{
    display: flex;
    flex-direction: column;
}
