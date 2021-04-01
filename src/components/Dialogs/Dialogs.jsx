import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormControls";
import { maxLengthCreator, required } from "../../utils/validator/validator";

let maxLengthCreator50 = maxLengthCreator(50)

const Dialogs = (props) => {

  let dialogsElement = props.dialogs.map((d) => (
    <DialogItem name={d.name} icon={d.icon} id={d.id} key={d.id} />
  ));

  let messagesElements = props.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  };
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElement}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>
  );
};

const AddMessageForm = (props) =>{
  return(
    <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={Textarea} name={'newMessageBody'} placeholder={' Enter your message'} validate={[required, maxLengthCreator50]}/>
        </div>
        <div>
          <button>Send</button>
        </div>   
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;
