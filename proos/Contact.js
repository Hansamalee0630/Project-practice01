import React from "react"
import Contact from "./Contact.js"
/* Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?
*/

function App() {
    return (
        <div className="contacts">
            <Contact 
                img = "./images/mr-whiskerson.png"
                name = "Mr. Whiskerson"
                phoneNo = "(212) 555-1234"
                email = "mr.whiskaz@catnap.meow"
            />  
            <Contact 
                img = "./images/fluffykins.png"
                name = "Fluffykins"
                phoneNo = "(212) 555-2345"
                email = "fluff@me.com"
            />  
            <Contact 
                img = "./images/felix.png"
                name = "Felix"
                phoneNo = "(212) 555-4567"
                email = "thecat@hotmail.com"
            />  
            <Contact 
                img = "thecat@hotmail.com"
                name = "Pumpkin"
                phoneNo = "(0800) CAT KING"
                email = "pumpkin@scrimba.com"
            />  
        </div>
    )
}

export default App
