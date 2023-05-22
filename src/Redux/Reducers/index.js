export const init = {
  posts: [],
  users: [],
  comments: [],
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
    case "COMMENTS_LOADED":
      return {
        ...state,
        comments: { ...state.comments, [action.key]: action.payload },
      };
  }

  return state;
}
