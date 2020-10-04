import React from "react";
import '../App.css';

class Footer extends React.Component {   
    render = () => {
        return (
            <footer>
                <div>
                    <span id="title">
                        Challenge "Can you hear me now?"<br/>
                        Category: "Connect"
                    </span>
                </div>
                <div>
                    <span id="title">
                        Can you hear me now?
                    </span>
                </div>
                <div>
                    <span id="title">
                        Official Repository: <br/><a href={"http://github.com/dbob486/GoTeam0.0"} rel={"Github"}>GO Team 0.0</a>
                    </span>
                </div>            
            </footer> 
        );
    }
}
export default Footer;