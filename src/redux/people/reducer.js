import {
  FETCH_PEOPLE_REQUEST,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILURE,
} from './actions';

export const initialState = {
  peopleList: [],
  hasMore: false,
  isFetching: false,
  error: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEOPLE_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: undefined,
      };
    }

    case FETCH_PEOPLE_SUCCESS: {
      const { peopleList: newPeopleList, hasMore } = action.payload;
      const { peopleList } = state;

      return {
        ...state,
        peopleList: [...peopleList, ...newPeopleList],
        hasMore,
        isFetching: false,
      };
    }

    case FETCH_PEOPLE_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    default:
      return state;
  }
};
