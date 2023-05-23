export const init = {
  posts: [],
  user: null,
  comments: [],
};

export default function appReducer(state = init, action) {
  switch (action.type) {
    case "POSTS_LOADED":
      return {
        ...state,
        posts: action.payload,
      };
    case "USER_LOADED":
      return {
        ...state,
        user: action.payload,
      };
    case "COMMENTS_LOADED":
      return {
        ...state,
        comments: { ...state.comments, [action.key]: !action.payload ? [] : action.payload },
      };
    case "COMMENTS_REMOVE":
      const { [action.key]: removeComment, ...updatedComments } = state.comments;
      return {
        ...state,
        comments: updatedComments,
      };
  }
  return state;
}