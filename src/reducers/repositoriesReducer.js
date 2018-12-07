import {
  LOAD_REPOSITORIES_FAILED,
  LOAD_REPOSITORIES_REQUEST,
  LOAD_REPOSITORIES_SUCCESS
} from "../actions/repositoriesActions";

const initialState = {
  repositories: [],
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_REPOSITORIES_SUCCESS:
      return { ...state, repositories: action.repositories };
    case LOAD_REPOSITORIES_FAILED:
      return { ...state, error: action.error };
    case LOAD_REPOSITORIES_REQUEST:
      return { ...state, error: null };
    default:
      return state;
  }
}