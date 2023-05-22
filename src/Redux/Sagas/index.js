import { all, call, spawn } from "redux-saga/effects";
import { loadAllData } from "./initialSagas";
import { loadComments, removeComments } from "./commentSagas";

export default function* rootSaga() {
  const sagas = [loadAllData, loadComments, removeComments];
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
