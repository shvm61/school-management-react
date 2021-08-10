import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Test from "./test";
import Routes from "./Route";
import axios from "axios";

import { Dashboard, DashboardContent, Error, StudentList } from "./component";

axios.defaults.baseURL = "https://sclmgmt.herokuapp.com/api";

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Switch>
            <Route path="/test" component={Test} />
            <Route
              exact
              path="/dashboard"
              render={() => {
                return <Dashboard component={DashboardContent} />;
              }}
            />
            <Route
              exact
              path="/dashboard/student"
              render={() => {
                return <Dashboard component={StudentList} />;
              }}
            />
            {/* <Route exact path="/compile" component={compile} /> */}
            {/* <AuthRoute exact path="/login" component={login} /> */}
            {/* <AuthRoute exact path="/signup" component={signup} /> */}
            {/* <Route exact path="/users/:handle" component={user} /> */}
            <Route path="*" component={Error} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
