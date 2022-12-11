import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import PlayBar from "./components/PlayBar";
import SideBar from "./components/SideBar";
import AlbumIndexPage from "./components/AlbumIndexPage";
import AlbumShowPage from "./components/AlbumShowPage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          {/* <SideBar/> */}
          {/* <img src={require("/home/arnobdam/wsl-desktop/projects/symphonify/frontend/src/images/eternal_atake_lil_uzi_vert.jpg")}/> */}
          <div className="homeControls">
            <Navigation />            
            <SideBar/>
            <AlbumIndexPage/>
            <PlayBar />
          </div>
        </Route>
        <Route path="/albums/:albumId">
          <AlbumShowPage/>
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