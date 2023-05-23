import { call, put, delay, take } from "redux-saga/effects";
import axios from "axios";

export function* loadUsers() {
  while (true) {
    const action = yield take("LOAD_USER");
    const { userId } = action;
    yield put({
      type: "USER_LOADED",
      payload: null,
    });
    yield delay(500);
    const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = response.data;
    yield put({
      type: "USER_LOADED",
      payload: data,
    });
  }
}
