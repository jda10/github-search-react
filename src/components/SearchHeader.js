import React, { Component } from 'react';

import axios from 'axios';

import img from '../imgs/GitHub-Logo.png'
class SearchHeader extends Component {
    
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
     handleChange(e){
         this.setState({value : e.target.value});
     }

     async handleSubmit(event){
        event.preventDefault();
        let x = await axios.get('https://api.github.com/users/jda10/repos');
        console.log(x);
        alert("Request sent successfully")
     }

     
    render() { 
        return ( 
            <div id="searchForm">
                <img src={img} alt="Github logo"></img>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="header-search">
                    </label>
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Search projects by user"
                        name="s" 
                        onChange={this.handleChange}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
         );
    }
}
 
export default SearchHeader;