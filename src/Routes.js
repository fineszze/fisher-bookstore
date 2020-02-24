import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import Books from"./books/Book";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Books" component={Books} />
        </Switch>
    );
}