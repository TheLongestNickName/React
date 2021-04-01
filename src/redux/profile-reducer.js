import { ProfileAPI,  } from "../components/API/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

const initialState = {
  post: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "it's my first post", likesCount: 11 },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
    { id: 6, message: "Yo" },
  ],
  profile: null,
  status : ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 7,
        message: action.text,
        likesCount: 0,
      };
      return{
        ...state, post:[...state.post ,newPost]
      }
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};
export default profileReducer;

export const addPostActionCreator = (text) => {
  return {
    type: ADD_POST,
    text
  };
};
export const setStatus = (status) => {
  
  return {
    type: SET_STATUS,
    status
  };
};


export const setUser = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

export const getUserProfile = (userId)=>{
  return (dispatch) => {
    ProfileAPI.getProfile(userId)
      .then((data) => {
        dispatch(setUser(data));
      });
  }
}
export const getStatus = (userId)=>{
  return (dispatch) => {
    ProfileAPI.getStatus(userId)
      .then((respone) => { 
        dispatch(setStatus(respone));
      });
  }
}
export const updateStatus = (status)=>{
  return (dispatch) => {
    ProfileAPI.updateStatus(status)
      .then((respone) => {
        if(respone.data.resultCode === 0){
          dispatch(setStatus(status));
        }
      });
  }
}
