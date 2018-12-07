export const LOAD_REPOSITORIES_SUCCESS = 'LOAD_REPOSITORIES_SUCCESS';
export const LOAD_REPOSITORIES_FAILED = 'LOAD_REPOSITORIES_FAILED';
export const LOAD_REPOSITORIES_REQUEST = 'LOAD_REPOSITORIES_REQUEST';

export const loadRepositories = (name) => ({ type: LOAD_REPOSITORIES_REQUEST, name });