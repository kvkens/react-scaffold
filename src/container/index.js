import React, { Component } from 'react';
import Hello from 'components/Hello';
import Jay from 'components/Jay';

class App extends Component {
    render() {
        return (
            <div>
                <Hello />
                <Jay />
            </div>
        );
    }
}

export default App;
