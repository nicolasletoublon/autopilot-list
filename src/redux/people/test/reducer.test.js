import reducer, { initialState } from '../reducer';
import {} from '../actions';
import { fetchPeopleRequest } from '../actions';
import { fetchPeopleFailure } from '../actions';
import { fetchPeopleSuccess } from '../actions';

describe('People', () => {
  describe('reducer', () => {
    it('INITIAL STATE', () => {
      const r = reducer(undefined, {});
      expect(r).toEqual(initialState);
    });

    it('FETCH_PEOPLE_REQUEST', () => {
      const r = reducer(undefined, fetchPeopleRequest());
      expect(r).toEqual({
        ...initialState,
        isFetching: true,
      });
    });

    it('FETCH_PEOPLE_FAILURE', () => {
      const r = reducer(undefined, fetchPeopleFailure('error'));
      expect(r).toEqual({
        ...initialState,
        error: 'error',
        isFetching: false,
      });
    });

    it('FETCH_PEOPLE_SUCCESS', () => {
      const r = reducer(
        undefined,
        fetchPeopleSuccess([{ name: 'name' }], true)
      );
      expect(r.peopleList).toEqual([{ name: 'name' }]);
      expect(r.isFetching).toBeFalsy();
      expect(r.hasMore).toBeTruthy();
    });

    it('FETCH_MORE_PEOPLE_SUCCESS', () => {
      const r = reducer(
        { ...initialState, peopleList: [{ name: 'name' }] },
        fetchPeopleSuccess([{ name: 'name2' }], true)
      );
      expect(r.peopleList).toEqual([{ name: 'name' }, { name: 'name2' }]);
      expect(r.isFetching).toBeFalsy();
      expect(r.hasMore).toBeTruthy();
    });
  });
});
