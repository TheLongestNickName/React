import React from "react";
import Users from "./Users/Users";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollovingProgress,
  requestUsers,
  toggleIsFetching,
  
} from "../../redux/users-reducer";

import Preloader from "../Preloader/preloader";
import { compose } from "redux";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { getPageSize, getUsers, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from "../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    let {currentPage,pageSize } = this.props
    this.props.requestUsers(currentPage, pageSize);
  }

  
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.props.requestUsers}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isFetching: getIsFetching(state),
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    followingInProgress: getFollowingInProgress(state)
  };
};



export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollovingProgress,
    getUsers: requestUsers,
    toggleIsFetching,
    requestUsers
  })
)(UsersContainer)
