const initialState = null;

const userReducer = (state = initialState,action) => {
  switch(action.type) {
    case 'USER': {
      return action.payload;
    }
    case 'CLEAR': {
      return null;
    }
    case 'UPDATE': {
      const newState ={
        ...state,
        following: action.payload.following,
        followers: action.payload.followers
      }
      return newState;
    }
    case 'UPDATEPIC': {
      const newState = {
        ...state,
        pic: action.payload
      }
      return newState;
    }
    default: {
      return state
    }
  }
}
export default userReducer;