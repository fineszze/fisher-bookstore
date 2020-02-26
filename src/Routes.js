import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import Books from"./books/Book";
import Author from"./authors/Author";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Books" component={Books} />
            <Route path="/Author" component={Author} />
        </Switch>
    );
}