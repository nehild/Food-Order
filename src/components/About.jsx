import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return(
        <div className="main-area">
            
            <div className="banner">
                <h1>About Us</h1>
                <ul>
                    <Link to="/">Home</Link> 
                    <span style={{margin:"0px 10px"}}> / </span>
                    <li>About</li>
                </ul>
            </div>

            <p>
            You don’t need to outright say, “our mission is __,” but you should convey the mission of your business in your About Us copy. This is key for attracting talent, as well as leads that have Corporate Social Responsibility (CSR) goals.            </p>
           <p>Every business has an origin story worth telling, and usually, one that justifies why you even do business and have clients.

Some centennial enterprises have pages of content that can fit in this section, while startups can tell the story of how the company was born, its challenges, and its vision for the future.</p>
            <p>Of course, you have a homepage and dedicated pages for your products, but summarizing your offerings on the About Us page is crucial to tie them in with brand values in your messaging.

Highlight the benefits and showcase what you do (and why it is unique).</p>        
        </div>
        
    )
}

export default About;