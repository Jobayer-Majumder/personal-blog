import './App.css';
import { Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "./routes/routes";

const Loading = () => {
  <h1>Loading.</h1>
}

function App() {
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
