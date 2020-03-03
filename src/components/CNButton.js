import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CNButton extends Component {
    render() {
        return (
            <div>
                <Link {...this.props} >{this.props.name}</Link>
            </div>
        )
    }
}

export default CNButton;