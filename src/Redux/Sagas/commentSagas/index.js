import { call, put, take, delay } from "redux-saga/effects";
import axios from "axios";

export function* loadComments() {
  while (true) {
    const action = yield take("LOAD_COMMENT");
    const { postId } = action;
    yield put({
      type: "COMMENTS_LOADED",
      key: postId,
    });
    yield delay(500);
    const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    const data = response.data;
    yield put({
      type: "COMMENTS_LOADED",
      payload: data,
      key: postId,
    });
  }
}

export function* removeComments() {
  while (true) {
    const action = yield take("REMOVE_COMMENT");
    const { postId } = action;

    yield put({
      type: "COMMENTS_REMOVE",
      key: postId,
    });
  }
}
