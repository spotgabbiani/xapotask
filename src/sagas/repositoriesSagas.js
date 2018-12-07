import {
  LOAD_REPOSITORIES_FAILED,
  LOAD_REPOSITORIES_REQUEST,
  LOAD_REPOSITORIES_SUCCESS,
  LOAD_REPOSITORY_CONTRIBUTORS_SUCCESS,
  LOAD_REPOSITORY_CONTRIBUTORS_FAILED,
  LOAD_REPOSITORY_CONTRIBUTORS_REQUEST
} from "../actions/repositoriesActions";
import {loadFacebookRepositories, loadRepositoryContributors} from "../api/githubapi";
import {call, put, takeLatest} from 'redux-saga/effects';

function* loadRepository() {
  try {
    const repositories = yield call(loadFacebookRepositories);
    yield put({ type: LOAD_REPOSITORIES_SUCCESS, repositories });
  } catch (e) {
    yield put({ type: LOAD_REPOSITORIES_FAILED, error: e.message });
  }
}

function* loadContributors(action) {
  try{
    const contributors = yield call(loadRepositoryContributors, action.name);
    yield put({ type: LOAD_REPOSITORY_CONTRIBUTORS_SUCCESS, contributors })
  }catch (e) {
    yield put({ type: LOAD_REPOSITORY_CONTRIBUTORS_FAILED, error: e.message });
  }
}

function* repositoriesSaga() {
  yield takeLatest(LOAD_REPOSITORIES_REQUEST, loadRepository);
  yield takeLatest(LOAD_REPOSITORY_CONTRIBUTORS_REQUEST, loadContributors)
}

export default repositoriesSaga;