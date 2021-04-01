import React from "react";
import styles from "./Users.module.css";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, onPageChanged, totalUsersCount, followingInProgress, pageSize, users, follow, unfollow, ...props}) => {
  
  return (
    <div>
      <Paginator currentPage = {currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize}/>

      {users.map((u) => (
        <User key={u.id} user={u} followingInProgress={followingInProgress} follow={follow} unfollow={unfollow} />
        
      ))}
    </div>
  );
};

export default Users;
