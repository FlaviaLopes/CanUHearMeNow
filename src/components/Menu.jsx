import React from "react";
import './css/Menu.css';
import MenuItem from "./MenuItem";
import PropTypes from 'prop-types';

class Menu extends React.Component {
    render() {
        return this.props.menu.map((item) => (
            <MenuItem key={item.id} item={item} markComplete={this.markComplete}/>
        ));        
    }
}

//PropTypes
Menu.propTypes = {
    menu: PropTypes.array.isRequired
}

export default Menu;