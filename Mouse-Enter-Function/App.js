import React from "react"

export default function App() {
    /**
     * Add our new function to the button
     */
    function handleClick() {
        console.log("I was clicked!")
    }
    
    /**
     * Log something to the console when the mouse hovers over the image
     */
    function mouseEnterImage() {
        console.log('onMouseEnter')
    }
    
    return (
        <div className="container">
            <img 
                src="https://picsum.photos/640/360" 
                onMouseEnter = {mouseEnterImage} 
            />
            <button onClick = {handleClick} >Click me</button>
        </div>
    )
}
