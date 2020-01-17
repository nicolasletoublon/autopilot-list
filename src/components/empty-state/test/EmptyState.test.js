import React from 'react';
import EmptyState from '../EmptyState';
import { shallow, mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

describe('EmptyState', () => {
  describe('should render his Button with Fetching Data if isFetching is true', () => {
    const state = {
      people: {
        isFetching: true,
      },
    };

    const mockStore = createStore(() => state);

    const comp = (
      <Provider store={mockStore}>
        <EmptyState />;
      </Provider>
    );

    it('snapshot', () => {
      const component = mount(comp);
      expect(component).toMatchSnapshot();
    });

    it('should find the right value in the DOM', () => {
      const component = mount(comp);
      expect(component.find('LoadingButton')).toHaveLength(1);
      expect(component.find('LoadingButton').props().children).toEqual(
        'Fetching data...'
      );
    });
  });

  describe('should render his Button with Load Data if isFetching is false', () => {
    const state = {
      people: {
        isFetching: false,
      },
    };

    const mockStore = createStore(() => state);

    const comp = (
      <Provider store={mockStore}>
        <EmptyState />;
      </Provider>
    );

    it('snapshot', () => {
      const component = mount(comp);
      expect(component).toMatchSnapshot();
    });

    it('should find the right value in the DOM', () => {
      const component = mount(comp);
      expect(component.find('LoadingButton')).toHaveLength(1);
      expect(component.find('LoadingButton').props().children).toEqual(
        'Load data'
      );
    });
  });
});
