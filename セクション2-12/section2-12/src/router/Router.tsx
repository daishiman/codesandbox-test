import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { homeRoutes } from "./HomeRoutes";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/" >
        <Login />
      </Route>
      <Route
        path="/home"
        render={({ match: { url } }) => (
          <Switch>
            {homeRoutes.map((route) => (
              <Route
                key={route.ptah}
                exact={route.exact}
                path={`${url}${route.ptah}`}
              >
                {route.children}
              </Route>
            ))}
            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
        )} />
    </Switch>
  )
})
