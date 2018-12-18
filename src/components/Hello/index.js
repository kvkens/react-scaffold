import React, { Component } from 'react';
import { getDate } from 'utils';

import './index.css';

class Hello extends Component {
    componentDidMount = async() => {
        await console.log(getDate())
    }
    render() {
        return (
            <div className="hello">
                Hello
            </div>
        );
    }
}

export default Hello;
