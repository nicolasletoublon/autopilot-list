export const FETCH_PEOPLE_REQUEST = 'PEOPLE/FETCH_PEOPLE_REQUEST';
export const FETCH_PEOPLE_SUCCESS = 'PEOPLE/FETCH_PEOPLE_SUCCESS';
export const FETCH_PEOPLE_FAILURE = 'PEOPLE/FETCH_PEOPLE_FAILURE';

export const fetchPeopleRequest = () => ({
  type: FETCH_PEOPLE_REQUEST,
});

export const fetchPeopleSuccess = (peopleList, hasMore) => ({
  type: FETCH_PEOPLE_SUCCESS,
  payload: { peopleList, hasMore },
});

export const fetchPeopleFailure = (error) => ({
  type: FETCH_PEOPLE_FAILURE,
  payload: { error },
});
