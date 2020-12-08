import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import InboxView from "./components/InboxView";
import EmailView from "./components/EmailView";
import SendView from "./components/SendView";
import SearchView from "./components/SearchView";

class App extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <div><Link to="/emails">Emails</Link></div>
                    <div><Link to="/send">Send</Link></div>
                    <div><Link to="/search">Search</Link></div>

                    <Switch>
                        <Route exact path="/">
                            <Redirect to="emails" />
                        </Route>
                        <Route exact path="/emails">
                            <InboxView />
                        </Route>
                        <Route exact path="/emails/:id">
                            <EmailView emailId={ `${parseInt(window.location.pathname.split("/").reverse()[0]) - 1}`} />
                        </Route>
                        <Route exact path="/send">
                            <SendView />
                        </Route>
                        <Route exact path="/search">
                            <SearchView />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
