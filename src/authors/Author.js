import React, { Component } from "react";
import "./Author.css";
import { AuthorDisplay } from "./AuthorDisplay";

export default class Author extends Component {    
    constructor (props) {
        super(props);
        this.state = { 
            author: [
                {
                    name: "Eric Evans"
                },
                {
                    name: "Nicole Forsgren",
                },

            ]
        };
    }    
    
    render() {
        return (
            <div className = "Author">
                <div className ="lander">
                    <AuthorDisplay author={this.state.author} /> 
                </div>
            </div>
        );
    }

    
};


