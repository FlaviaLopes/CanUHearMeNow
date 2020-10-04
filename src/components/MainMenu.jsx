import React from "react";
import '../App.css';


class MainMenu extends React.Component {
    render = () => {
        return (            
            <div id="main-menu">
                <nav>
                <div class="btn-group">
                    <button>Relay Device</button>
                    <button>Limited Bandwidth</button>
                    <button>Time</button>
                </div>
                </nav>
            </div>        
        );        
    }
}

export default MainMenu;


