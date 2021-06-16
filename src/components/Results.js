import React, { Component } from 'react';
class Results extends Component {

    state = {
        id : this.props
    }
    render() {
        return (
            <div id="results">
                <h2>Displaying results</h2>
            </div>
        );
    }
}
export default Results;