import React, { Component } from 'react';
import img from '../imgs/GitHub-Logo.png';
import axios from 'axios';
class SearchHeader extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            value : "",
            hasData : false,
            responseData: null,
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
        this.setState({hasData : true});
        this.setState({responseData : JSON.stringify(x)})
     }

     
    render() {
        console.log(JSON.parse(this.state.responseData))
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
                <br></br>
                {this.state.hasData ? <div id="output">
                    {this.state.responseData}
                </div> : <div></div>}
            </div>
         );
    }
}
 
export default SearchHeader;