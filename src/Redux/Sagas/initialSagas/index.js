import { all, call, fork, put, delay } from "redux-saga/effects";
import axios from "axios";
export function* loadPosts() {
  yield delay(500);
  const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/posts");
  const data = response.data;
  yield put({ type: "POSTS_LOADED", payload: data });
}

export function* loadUsers() {
  yield delay(500);
  const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/users");
  const data = response.data;
  yield put({ type: "USERS_LOADED", payload: data });
}

export function* loadAllData() {
  yield all([fork(loadPosts), fork(loadUsers)]);
}
