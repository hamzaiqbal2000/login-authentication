import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DisplayCalls from "./components/DisplayCalls/DisplayCalls";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import CallDetails from "./components/CallDetails/CallDetails";
import { useAuth } from "./context/AuthContext";
import { CallProvider } from "./context/CallContext";

function App() {
  const { token } = useAuth();
  if (!token) {
    return <Login />;
  }

  return (
    <CallProvider>
      <Container>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ marginTop: "1.5rem" }}
        >
          <h1>Calls</h1>
          <Logout />
        </div>
        <Router>
          <Switch>
            <Route>
              <DisplayCalls path="/display" />
            </Route>
            <Route>
              <CallDetails path="/details" />
            </Route>
            {/* <Route path="/displaycalls"></Route> */}
          </Switch>
        </Router>
      </Container>
    </CallProvider>
  );
}

export default App;
