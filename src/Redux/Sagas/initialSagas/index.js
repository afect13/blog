import { all, call, delay, fork, put } from "redux-saga/effects";
import axios from "axios";
export function* loadPosts() {
  const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/posts");
  const data = response.data;
  yield put({ type: "POSTS_LOADED", payload: data });
}

export function* loadAllData() {
  yield all([fork(loadPosts)]);
}
