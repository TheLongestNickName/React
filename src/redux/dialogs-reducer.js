const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your it-kamasutra" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
    { id: 6, message: "Yo" },
  ],
  dialogs: [
    {
      id: 1,
      name: "Dimych",
      icon:
        "https://from-ua.com/upload/articles/2015/11/13/medium/1447413117_avatar.jpg",
    },
    {
      id: 2,
      name: "Andrey",
      icon:
        "https://from-ua.com/upload/articles/2015/11/13/medium/1447413117_avatar.jpg",
    },
    {
      id: 3,
      name: "Sveta",
      icon:
        "https://from-ua.com/upload/articles/2015/11/13/medium/1447413117_avatar.jpg",
    },
    {
      id: 4,
      name: "Sasha",
      icon:
        "https://from-ua.com/upload/articles/2015/11/13/medium/1447413117_avatar.jpg",
    },
    {
      id: 5,
      name: "Viktor",
      icon:
        "https://from-ua.com/upload/articles/2015/11/13/medium/1447413117_avatar.jpg",
    },
    {
      id: 6,
      name: "Valera",
      icon:
        "https://from-ua.com/upload/articles/2015/11/13/medium/1447413117_avatar.jpg",
    },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {

    case SEND_MESSAGE: {
     
      /* let findItem = (id) => {
        debugger
        let filtered = initialState.messages.filter((item) => item.id == id);
        if (filtered.length > 0) {
          alert('a')
          return filtered[0];
        }
        return id;
      }
      let nextId = () => {
        let newId = initialState.messages.length + 1;
        while(!findItem(newId)){
           newId++
        }
        return  newId
      }
     */
     let body = action.newMessageBody;
     return{
        ...state,
         messages: [...state.messages, {id: 7, message: body}]
     }

    }
    
    default:
      return state;
  }
};
export default dialogsReducer;

export const sendMessageCreator = (newMessageBody) => {
  return {
    type: SEND_MESSAGE,
    newMessageBody: newMessageBody,
  };
};
