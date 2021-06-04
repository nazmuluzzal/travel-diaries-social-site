import React, { useEffect, createContext, useReducer,useContext } from "react";
import './App.css'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Screens/Home/Home";
import Profile from "./components/Screens/Profile/Profile";
import SignIn from "./components/Screens/SignIn/SignIn";
import Signup from "./components/Screens/Signup/Signup";
import CreatePost from "./components/Screens/CreatePost/CreatePost";
import { reducer, initialState } from './reducers/userReducer'

export const UserContext = createContext()

const Routing = () => {
  const history = useHistory()
  const {state, dispatch} = useContext(UserContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))

    if (user){
      dispatch({type:"USER",payload:user})
      history.push("/")
    }
    else{
      history.push("/signin")
    }
  },[])
  return (
    <Switch>
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
      <Route path="/create">
        <CreatePost></CreatePost>
      </Route>
    </Switch>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routing></Routing>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
