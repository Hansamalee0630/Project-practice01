import React from "react"

export default function Meme(){
    return(
        <main>
            <form className = "form" >
                <div>
                    <label className="form--label">Top text</label>
                    <input 
                        type = "text" 
                        placeholder="shut up"
                        className = "text-01" 
                    />
                </div>
                <div>
                    <label className="form--label">Bottom text</label>
                    <input 
                        type = "text" 
                        placeholder="and take my money"
                        className = "text-01" 
                    />
               </div>
                <button 
                    className = "Button-style">
                    Get a new meme image 🖼
                </button>
            </form>
        </main>
    )
}
