import React from "react";
import '../App.css';

class Panel extends React.Component {
    createCheckbox = (label) =>{
        return <label><input type="checkbox" onChange="" defaultChecked=""/> {label} </label>
    }

    render = () => {
        return (
            <div id="panel">
                <div>
                    <ul><h3>Data Types</h3>
                        <li>
                            <button>HD Video</button>
                        </li>
                        <li>
                            <button>Live Video</button>
                        </li>
                        <li>
                            <button>Audio</button>
                        </li>
                        <li>
                            <button>Images</button>
                        </li>
                        <li>
                            <button>Web</button>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul><h3>Data Speed</h3>
                        <li>{this.createCheckbox('Speed 1')}</li>
                        <li>{this.createCheckbox('Speed 2')}</li>
                        <li>{this.createCheckbox('Speed 3')}</li>
                    </ul>
                </div>
                <div>
                    info text
                </div>
            </div>
        );
    }
}

export default Panel;