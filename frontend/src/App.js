import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import PlayBar from "./components/PlayBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          {/* <SideBar/> */}
          <div className="homeControls">
            <Navigation />
            <SideBar/>
            <PlayBar />
          </div>
        </Route>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;