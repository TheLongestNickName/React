import { usersAPI } from "../components/API/api";
import { updateObjectInArray } from "../utils/object-helpers";


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGEL_IS_FETCHING = "TOGGEL_IS_FETCHING";
const FOLLOVING_IN_PROGRESS = "FOLLOVING_IN_PROGRESS";
const initialState = {
  users: [],
  totalUsersCount: 200,
  pageSize: 4,
  currentPage: 1,
  isFetching: true,
  followingInProgress:[]
};

const usersReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: true} ) 
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: false} ) 
       
      };
    case SET_USERS: {
      return {
        ...state,
        users: [...action.users],
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    }
    case TOGGEL_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case FOLLOVING_IN_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching 
        ? [...state.followingInProgress, action.userId]
        : [state.followingInProgress.filter(id => id != action.id)]
      };
    }
    
    default:
      return state;
  }
};
export default usersReducer;

export const followSuccess = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const unfollowSuccess = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};
export const setCurrentPage = (currentPage) => {
  
    return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};
export const setTotalUsersCount = (totalCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalCount,
  };
};
export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGEL_IS_FETCHING,
    isFetching,
  };
};
export const toggleFollovingProgress = (isFetching, userId) => {
  return {
    type: FOLLOVING_IN_PROGRESS,
    isFetching,
    userId
  };
};

export const requestUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch (toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        usersAPI.getUsers(page, pageSize).then((data) => {
          dispatch(toggleIsFetching(false));
          dispatch(setUsers(data.items));
          dispatch(setTotalUsersCount(data.totalCount));
          });
      }
} 
const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator)=>{
    let resultCode = await apiMethod(userId)

  dispatch(toggleFollovingProgress(true, userId));
  if (resultCode === 0){
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollovingProgress(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
      let apiMethod =  usersAPI.unfollow.bind(usersAPI)
      let actionCreator = unfollowSuccess
      followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
    }
} 

export const unfollow = (userId) => {
    return async (dispatch) => {
      let apiMethod =  usersAPI.follow.bind(usersAPI)
      let actionCreator = followSuccess
      followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
    }
} 