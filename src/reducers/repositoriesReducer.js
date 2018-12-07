import {
  LOAD_REPOSITORIES_FAILED,
  LOAD_REPOSITORIES_REQUEST,
  LOAD_REPOSITORIES_SUCCESS,
  LOAD_REPOSITORY_CONTRIBUTORS_SUCCESS,
  LOAD_REPOSITORY_CONTRIBUTORS_FAILED,
  LOAD_REPOSITORY_CONTRIBUTORS_REQUEST
} from "../actions/repositoriesActions";

const initialState = {
  repositories: [],
  error: null,
  selectedRepository:{
    contributors: []
  }
};

function setSelectedRepository(state, action){
  const selectedRepository = state.repositories.find(repository => repository.name === action.name);
  return {...state, selectedRepository:{...selectedRepository, contributors:[]}};
}

function addContributorsData(state, action){
  const contributors = action.contributors;
  return {...state, selectedRepository:{...state.selectedRepository, contributors}};
}

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_REPOSITORIES_SUCCESS:
      return { ...state, repositories: action.repositories };
    case LOAD_REPOSITORIES_FAILED:
      return { ...state, error: action.error };
    case LOAD_REPOSITORIES_REQUEST:
      return { ...state, error: null };
    case LOAD_REPOSITORY_CONTRIBUTORS_REQUEST:
      return setSelectedRepository(state, action);
    case LOAD_REPOSITORY_CONTRIBUTORS_SUCCESS:
      return addContributorsData(state, action);
    case LOAD_REPOSITORY_CONTRIBUTORS_FAILED:
      return { ...state, error: action.error };
    default:
      return state;
  }
}