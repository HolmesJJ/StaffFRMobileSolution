import React from "react";
import { Route, Switch } from "react-router-dom";

// Routes
import { routes } from "./routes";

const App = () => {
  const routeComponents = routes.map(({ path, component }, index) => (
    <Route path={path} component={component} exact key={index} />
  ));

  return <Switch>{routeComponents}</Switch>;
};

export default App;
