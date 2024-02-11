import React from "react"

export default function Meme(){
    return(
        <main>
            <form className = "form" >
                <input 
                    type = "text" 
                    placeholder="Top text"
                    className = "text-01" 
                />
                <input 
                    type = "text" 
                    placeholder="Bottom text"
                    className = "text-01" 
                />
                <button 
                    className = "Button-style">
                    Get a new meme image 🖼
                </button>
            </form>
        </main>
    )
}
