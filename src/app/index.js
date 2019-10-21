import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./app.scss";

import ListRoute from "./routes/list";
import GraphRoute from "./routes/graph";
import RecipesRoute from "./routes/recipes";

import SplashScreen from "./components/screen/splash";

document.title = "react app";

const routesComponents = {
  list: ListRoute,
  graph: GraphRoute,
  recipes: RecipesRoute
};

const mapStateToProps = ({ state: { routes } }) => ({ routes });

export const Routes = connect(mapStateToProps)(({ routes }) => (
  <Switch>
    {Object.entries(routes).map(route(routes["supported-languages"]))}
    <Route path="/" component={SplashScreen} />
  </Switch>
));

/**
 * @param {[language:string,routes:Object]}
 * @returns {[Route]}
 */
function route(supportedLanguages) {
  return ([language, routes]) => {
    return Object.values(supportedLanguages).includes(language)
      ? Object.entries(routes).map(([key, route]) => (
          <Route
            path={`/${language}/${route}`}
            exact
            strict
            component={routesComponents[key]}
          />
        ))
      : undefined;
  };
}
