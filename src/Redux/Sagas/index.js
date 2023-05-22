import { all, call, put, spawn, take } from "redux-saga/effects";
import { loadAllData } from "./initialSagas";
import axios from "axios";

export function* loadComments() {
  while (true) {
    const action = yield take("LOAD_COMMENT");
    const { postId } = action;
    const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    const data = response.data;
    yield put({
      type: "COMMENTS_LOADED",
      payload: data,
      key: postId,
    });
  }
}

export default function* rootSaga() {
  const sagas = [loadAllData, loadComments];
  const retrySagas = yield sagas.map((saga) => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          console.log(e);
        }
      }
    });
  });
  yield all(retrySagas);
}
