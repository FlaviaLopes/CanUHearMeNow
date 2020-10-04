import React from "react";
import './css/Menu.css';
import PropTypes from 'prop-types';

class MenuItem extends React.Component {

    getStyle = () => {
        return {
            background: 'orange',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.item.selected ? 'line-through' : 'none'
        }
    }
 

    render() {
        const {id, title} = this.props.item;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.item.selected.bind(this, id)} /> {' '}
                    {title}
                </p>
            </div>
        );        
    }
}
//PropTypes
MenuItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default MenuItem;