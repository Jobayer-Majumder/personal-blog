import './App.css';
import { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes/routes";
import { useDispatch } from 'react-redux';
import { isLoggedIn } from './store/actions/UserActions';

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
            routes?.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                ></Route>
              )
            })
          }
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
