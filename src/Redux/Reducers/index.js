export const init = {
  posts: [],
};

export default function appReducer(state = init, action) {
  switch (action.type) {
    case "POSTS_LOADED":
      return {
        ...state,
        posts: action.payload,
      };
  }

  return state;
}
