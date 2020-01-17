import React from 'react';
import { shallow, mount } from 'enzyme';
import PeopleListItem from '../PeopleListItem';

describe('PeopleListItem', () => {
  describe('should render correctly the name and the adornment', () => {
    const comp = <PeopleListItem name="Name" />;

    it('snapshot', () => {
      const component = shallow(comp);
      expect(component).toMatchSnapshot();
    });

    it('should find the right components in the DOM with the right props', () => {
      const component = mount(comp);
      expect(component.find('Adornment')).toHaveLength(1);
      expect(component.find('Adornment').props().name).toEqual('Name');
      expect(component.find('Adornment').props().avatar).toBeUndefined();
      expect(component.find('NameWrapper')).toHaveLength(1);
      expect(component.find('NameWrapper').props().children).toEqual('Name');
    });
  });
});
