import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Screens/Home/Home";
import Profile from "./components/Screens/Profile/Profile";
import SignIn from "./components/Screens/SignIn/SignIn";
import Signup from "./components/Screens/Signup/Signup";
import CreatePost from "./components/Screens/CreatePost/CreatePost";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";
import { loggedUser } from "./redux/action/userAction";
import UserProfile from "./components/Screens/UserProfile/UserProfile";
import SubscribesUserPosts from "./components/Screens/SubscribesUserPosts/SubscribesUserPosts";
import NewPassword from "./components/Screens/NewPassword";
import Reset from "./components/Screens/Reset";

const Routing = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(loggedUser(user));
    } else {
      if (!history.location.pathname.startsWith("/reset"))
        history.push("/signin");
    }
  }, [dispatch, history]);
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route path="/create">
        <CreatePost />
      </Route>
      <Route path="/profile/:userid">
        <UserProfile />
      </Route>
      <Route path="/myfollowingpost">
        <SubscribesUserPosts />
      </Route>
      <Route exact path="/reset">
        <Reset />
      </Route>
      <Route path="/reset/:token">
        <NewPassword />
      </Route>
    </Switch>
  );
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
