import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { LogoutThunk } from "../../redux/auth-reducer";
import { compose } from "redux";
import { withRouter } from "react-router-dom";


class HeaderContainer extends React.Component {
  
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, { LogoutThunk }),
  )(HeaderContainer);
