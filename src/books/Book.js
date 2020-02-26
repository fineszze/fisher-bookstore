import React, { Component } from "react";
import "./Book.css";
import { BookDisplay } from "./BookDisplay";

export default class Book extends Component {    
    constructor (props) {
        super(props);
        this.state = { 
            books: [
                {
                    id:1,
                    title: "Domain Driven Design",
                    author: "Eric Evans",
                    isbn: "978-0321125217"
                },
                {
                    id: 2,
                    title: "Accelerate",
                    author: "Nicole Forsgren",
                    isbn: "978-1942788331"
                },

                {
                    id: 3,
                    title: "Do Androids Dream of Electric Sheep",
                    author: "Phillip Dick",
                    isbn: "978-1942788332"
                },

                {
                    id: 4,
                    title: "I Was Told There'd Be Cake",
                    author: "Sloane Crosley",
                    isbn: "978-1942788333"
                },

                {
                    id: 5,
                    title: "A Clockwork Orange",
                    author: "Anthony Burgess",
                    isbn: "978-1942788334"
                },

                {
                    id: 6,
                    title: "The Perks of Being a Wallflower",
                    author: "Stephen Chbosky",
                    isbn: "978-1942788335"
                },

                {
                    id: 7,
                    title: "The Man Without Qualities",
                    author: "Robert Musil",
                    isbn: "978-1942788336"
                },

                {
                    id: 8,
                    title: "The Elephant Tree",
                    author: "R.D. Ronald",
                    isbn: "978-1942788337"
                },

            ]
        };
    }    
    
    render() {
        return (
            <div className = "Books">
                <div className ="lander">
                    <BookDisplay books={this.state.books} /> 
                </div>
            </div>
        );
    }

    
};

