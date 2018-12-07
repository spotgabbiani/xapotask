import {
  LOAD_REPOSITORIES_FAILED,
  LOAD_REPOSITORIES_REQUEST,
  LOAD_REPOSITORIES_SUCCESS
} from "../actions/repositoriesActions";
import {loadFacebookRepositories} from "../api/githubapi";
import {call, put, takeLatest} from 'redux-saga/effects';

function* loadRepository(action) {
  try {
    const repositories = yield call(loadFacebookRepositories);
    yield put({ type: LOAD_REPOSITORIES_SUCCESS, repositories });
  } catch (e) {
    yield put({ type: LOAD_REPOSITORIES_FAILED, error: e.message });
  }
}

function* repositoriesSaga() {
  yield takeLatest(LOAD_REPOSITORIES_REQUEST, loadRepository);
}

export default repositoriesSaga;