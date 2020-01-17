import {
  fetchPeopleFailure,
  fetchPeopleRequest,
  fetchPeopleSuccess,
} from './actions';
import mockListData from '../../assets/mocks/mockListData';

export function fakeCall(offset = 0, limit = 20) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: mockListData.slice(offset, offset + limit),
        hasMore: offset + limit < mockListData.length,
      });
    }, 1000);
  });
}

export function fetchPeopleListThunk() {
  return (dispatch, getState) => {
    const { people } = getState();
    const peopleListSize = people.peopleList.length;

    dispatch(fetchPeopleRequest());

    fakeCall(peopleListSize)
      .then(({ data, hasMore }) => {
        dispatch(fetchPeopleSuccess(data, hasMore));
      })
      .catch((e) => {
        dispatch(fetchPeopleFailure(e));
      });
  };
}
