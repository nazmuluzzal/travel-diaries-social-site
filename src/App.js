import React from "react";
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import SignIn from "./components/Screens/SignIn/SignIn";
import Signup from "./components/Screens/Signup/Signup";
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/signin">
        <SignIn></SignIn>
      </Route>
      <Route path="/signup">
        <Signup></Signup>
      </Route>
      <Route path="/profile">
        <Profile></Profile>
      </Route>
    </BrowserRouter>
  );
}

export default App;
