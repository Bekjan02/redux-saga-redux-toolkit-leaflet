import { all } from "redux-saga/effects";
import coordsSagas from "./sagas/sagas";

export function* rootSagas() {
   yield all([...coordsSagas]);
}
