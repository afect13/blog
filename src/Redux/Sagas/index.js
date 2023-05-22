import { all, call, spawn, delay, fork } from "redux-saga/effects";
import { loadAllData } from "./initialSagas";

export default function* rootSaga() {
  const sagas = [loadAllData];
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
