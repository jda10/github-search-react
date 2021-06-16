import React, { Component } from 'react';
import axios from 'axios';
import img from '../imgs/GitHub-Logo.png'
import {
    Redirect,
  } from "react-router-dom";
class SearchHeader extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            value : "",
            requestData : "",
            searched : false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
     handleChange(e){
         this.setState({value : e.target.value});
     }

     async handleSubmit(event){
        event.preventDefault();
        let x = await axios.get('https://api.github.com/users/jda10/repos');
        this.setState({requestData : JSON.stringify(x)});
     }

     
    render() {
        const hasData = this.state.requestData.length > 0;
        if(hasData){
            return(
                <Redirect to={{
                    'pathname': '/search',
                    state: {data: this.state.requestData}
                }
                }></Redirect>
            )
        }
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