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
                {
                    name: "Cynthia Williams",
                },
                {
                    name: "Tony Robbins",
                },
                {
                    name: "Albert Einstein",
                },
                {
                    name: "Anthony Williams",
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


