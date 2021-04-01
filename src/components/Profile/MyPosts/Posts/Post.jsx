import React from "react";
import s from "./Post.module.css";

const Post = props => {
  return (
    <div className={s.item}>
      <img
        alt=""
        src="https://from-ua.com/upload/articles/2015/11/13/medium/1447413117_avatar.jpg"
      />
      {props.message}
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
