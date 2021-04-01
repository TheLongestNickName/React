import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, BrowserRouter, withRouter } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer/ProfileContainer";
import HeaderContainer from "./components/Header/headerContainer";
import LoginPage from "./components/Login/login";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/Preloader/preloader";


class App extends React.Component{
  componentDidMount(){
    this.props.initializeApp()
  }

  render(){
    if(!this.props.initialized){
      return <Preloader/>
    }
  
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Route path="/dialogs" render={() => <DialogsContainer  />}/>
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path={"/users"} render={() => <UsersContainer />} />
            <Route path={"/login"} render={() => < LoginPage/>} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps= (state) =>{
 return {
    initialized : state.app.initialized
  }
}
export default compose(
  withRouter,
  connect(mapStateToProps,{initializeApp})
)(App)
