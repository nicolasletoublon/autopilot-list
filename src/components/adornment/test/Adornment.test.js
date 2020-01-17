import React from 'react';
import { shallow, mount } from 'enzyme';
import Adornment from "../Adornment";

describe('Adornment', () => {
  describe('should render an Avatar if the attribute is set', () => {
    const comp = <Adornment avatar="src" name="Name"/>;

    it('snapshot', () => {
      const component = shallow(comp);
      expect(component).toMatchSnapshot();
    });

    it('should find the Avatar in the DOM', () => {
      const component = mount(comp);
      expect(component.find('Avatar')).toHaveLength(1);
      expect(component.find('CrossIcon')).toHaveLength(0);
    });
  });

  describe('should render an Icon if avatar is not set', () => {
    const comp = <Adornment name="Name"/>;

    it('snapshot', () => {
      const component = shallow(comp);
      expect(component).toMatchSnapshot();
    });

    it('should find the CrossIcon in the DOM', () => {
      const component = mount(comp);
      expect(component.find('Avatar')).toHaveLength(0);
      expect(component.find('CrossIcon')).toHaveLength(1);
    });
  });
});
