import React from "react";
import './css/Animation.css';

class Animation extends React.Component {
    render = () => {
        return (
            <div id="animation">
                <div class="space">
                    <div class="planet">
                    <div class="earth">
                            <div class="img-map"></div>
                        </div>
                        <div class="mars">
                            <div class="img-map"></div>
                        </div>                        
                    </div>
                </div>
            </div>        
        );        
    }
}

export default Animation;
