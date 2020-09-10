import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import LogIn from "./LogIn";
import Header from "./Header";
import history from "../history";

import RequireAuth from "./RequiresAuth";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={LogIn}></Route>
          <Route
            path="/streams/list"
            exact
            component={RequireAuth(StreamList)}
          ></Route>
          <Route
            path="/streams/show/:id"
            exact
            component={RequireAuth(StreamShow)}
          ></Route>
          <Route
            path="/streams/new"
            exact
            component={RequireAuth(StreamCreate)}
          ></Route>
          <Route
            path="/streams/edit/:id"
            exact
            component={RequireAuth(StreamEdit)}
          ></Route>
          <Route
            path="/streams/delete/:id"
            exact
            component={RequireAuth(StreamDelete)}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
