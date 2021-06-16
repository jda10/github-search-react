import React, { Component } from 'react';


class Results extends Component {

    constructor(props){
        super(props)
        this.state = {
            data : [],
        }
    }
    render() { 
        console.log(this.state.data);
        return (
            <h1>{this.state.data}</h1>
        );
    }
}
 
export default Results;