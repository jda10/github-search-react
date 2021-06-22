import React, { Component } from 'react';
import img from '../imgs/GitHub-Logo.png';
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

        fetch(`https://api.github.com/users/${this.state.value}/repos`)
        .then((res) => res.json())
        .then((data) => {
            console.log(JSON.stringify(data))
            this.setState({
                responseData : JSON.stringify(data)
            })
        })
        .catch((error) => console.log(error))
        this.setState({hasData: true})
        console.log(JSON.parse(this.state.responseData))
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
            </div>
         );
    }
}
 
export default SearchHeader;