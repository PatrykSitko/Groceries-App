import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./app.scss";

import Home from "./routes/home";
import ListRoute from "./routes/list";
import GraphRoute from "./routes/graph";
import RecipesRoute from "./routes/recipes";

document.title = "react app";

const routesComponents = {
  list: ListRoute,
  graph: GraphRoute,
  recipes: RecipesRoute
};

const mapStateToProps = ({ state: { routes } }) => ({ routes });

export const Routes = connect(mapStateToProps)(({ routes }) => (
  <Switch>
    {Object.entries(routes).map(route)}
    <Route path="/" exact strict component={Home} />
  </Switch>
));

/**
 * @param {[language:string,routes:Object]}
 * @returns {[Route]}
 */
function route([language, routes]) {
  return Object.entries(routes).map(([key, route]) => (
    <Route
      path={`/${language}/${route}`}
      exact
      strict
      component={routesComponents[key]}
    />
  ));
}
