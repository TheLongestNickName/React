import { setUsersDataThunk } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

const initialState = {
  initialized: false,
 
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized : true    
      };

    default:
      return state;
  }
};
export default appReducer;

export const initializedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS,
  };
};

export const initializeApp = () => (dispatch) =>{
    let promise = dispatch(setUsersDataThunk())

    Promise.all([promise])
        .then(()=>{   //коамнда для поверки всех промисов которые завершились
            dispatch(initializedSuccess())
        })
    
}
  
  