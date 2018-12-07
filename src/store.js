import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";

import repositoriesReducer from "./reducers";
import repositoriesSaga from "./sagas/repositoriesSagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(repositoriesReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(repositoriesSaga);
export default store;