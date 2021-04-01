import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";
import {required, maxLengthCreator } from '../../../utils/validator/validator'
import { Textarea } from "../../common/FormsControls/FormControls";

const maxLength10 = maxLengthCreator(10)

const MyPosts = (props) => {
  let postsElements = props.posts.map((e) => (
    <Post message={e.message} id={e.id} likesCount={e.likesCount} key={e.id}/>
  ));
 
  
  let onAddPosts = (values) => {
    props.addPost(values.profilePost);
  };

  
  return (
      <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddMessageFormRedux onSubmit = {onAddPosts}/>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;



let myPostForm = (props)=>{
  return(
    <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={Textarea} name={'profilePost'} placeholder={'it-kamasutra.com'} validate={[required, maxLength10]} />
        </div>
        <div>
          <button>add post</button>
        </div>
    </form>
  )
}
const AddMessageFormRedux = reduxForm({form:'profileMessageForm'})(myPostForm)