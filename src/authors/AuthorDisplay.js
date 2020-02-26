import React from "react";
import { AuthorCard } from "./AuthorCard";
import { CardColumns } from "react-bootstrap";

export function AuthorDisplay(props) {
    return (
        <div className="display">
            <h3>Author</h3>
            <CardColumns>
                {props.author.map(b => (
                  <AuthorCard author={b} key={b.id} />
            ))}
            </CardColumns>
        </div>
    );
}