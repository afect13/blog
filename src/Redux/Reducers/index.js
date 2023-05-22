export const init = {
  posts: [],
  users: [],
};

export default function appReducer(state = init, action) {
  switch (action.type) {
    case "POSTS_LOADED":
      return {
        ...state,
        posts: action.payload,
      };
    case "USERS_LOADED":
      return {
        ...state,
        users: action.payload,
      };
  }

  return state;
}
