import { call, put, delay } from "redux-saga/effects";
import axios from "axios";
export function* loadPosts() {
  yield delay(500);
  const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/posts");
  const data = response.data;
  yield put({ type: "POSTS_LOADED", payload: data });
}
