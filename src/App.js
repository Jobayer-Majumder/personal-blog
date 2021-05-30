import './App.css';
import { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes/routes";
import { useDispatch } from 'react-redux';
import { isLoggedIn } from './store/actions/UserActions';
import AuthRedirectRoute from './routes/AuthRedirectRoute';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute';

const Loading = () => {
  return (
    <h1>Loading.</h1>
  )
}

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isLoggedIn())
  }, [])

  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>

          {
            routes.map((route, i) => {
              return route.authentication === "restricted" ? (
                <AuthRedirectRoute
                  key={i}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ) : route.authentication === "private" ? (
                <PrivateRoute
                  key={i}
                  path={route.path}
                  exact={route.exact}
                >{route.component}</PrivateRoute>
              ) : (
                    <Route
                      key={i}
                      path={route.path}
                      exact={route.exact}
                      component={route.component}
                    ></Route>
                  )
            })
          }

        </Switch>
      </Router>
    </Suspense >
  );
}

export default App;
