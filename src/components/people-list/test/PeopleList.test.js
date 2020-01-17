import React from 'react';
import { mount } from 'enzyme';
import PeopleList from '../PeopleList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

jest.mock('../ListObserver', () => () => 'ListObserver');

describe('PeopleList', () => {
  describe('should render correctly 2 PeopleListItem and no More results', () => {
    const state = {
      people: {
        peopleList: [
          {
            id: '1',
            name: 'name11',
          },
          {
            id: '2',
            name: 'name12',
          },
        ],
      },
    };

    const mockStore = createStore(() => state);

    const comp = (
      <Provider store={mockStore}>
        <PeopleList />
      </Provider>
    );

    it('snapshot', () => {
      const component = mount(comp);
      expect(component).toMatchSnapshot();
    });

    it('should find the 2 list items in the DOM', () => {
      const component = mount(comp);
      expect(component.find('PeopleListItem')).toHaveLength(2);
    });
  });
});
