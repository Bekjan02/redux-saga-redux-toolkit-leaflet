import { put, takeEvery } from 'redux-saga/effects';
import { ApiServices } from '../../HTTP/api';
import { getCoordsSuccess, getCoords } from '../reducers/coordsSlice';

export function* getCoordsSaga({ payload }) {
   try {
      new Promise((resolve) => {
         setTimeout(resolve, 5000);
      })
      const response = yield ApiServices.get(`${payload}`);
      yield put(getCoordsSuccess(response))
   } catch (error) {
      yield put({ type: 'GET_COORDS_FAILURE', error });
   }
}

const coordsSagas = [
   takeEvery(getCoords, getCoordsSaga),
];

export default coordsSagas;
