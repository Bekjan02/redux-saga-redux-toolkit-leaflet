import createSagaMiddleware from 'redux-saga'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import coordsReducer from "./reducers/coordsSlice";
import { rootSagas } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
   coordsReducer
});

export const store = configureStore({
   reducer: rootReducer,
   middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSagas);
