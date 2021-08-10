import { OmitProps } from "antd/lib/transfer/ListBody";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Test from './test';

function Routes(props) {


    return (

        <div>
            <Router>
                <div className="container">
                    <Switch>
                        {/* <Route exact path="/" component={home} /> */}
                        <Route exact path={`${props.match.path}/test`} component={Test} />
                        {/* <Route exact path="/compile" component={compile} /> */}
                        {/* <AuthRoute exact path="/login" component={login} /> */}
                        {/* <AuthRoute exact path="/signup" component={signup} /> */}
                        {/* <Route exact path="/users/:handle" component={user} /> */}
                        {/* <Route

                            path="*"
                            component={Test}
                        /> */}
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default Routes;
