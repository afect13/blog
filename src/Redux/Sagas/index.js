import { all, call, spawn } from "redux-saga/effects";
import { loadPosts } from "./postsSagas";
import { loadComments, removeComments } from "./commentSagas";
import { loadUsers } from "./userSagas";

export default function* rootSaga() {
  const sagas = [loadPosts, loadComments, removeComments, loadUsers];
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
