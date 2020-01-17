import React from 'react';
import PropTypes from 'prop-types';
import { InView } from 'react-intersection-observer';
import styled from 'styled-components';

const LoadObserver = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #e4e4e4;
  color: #c0c0c0;
`;

const ListObserver = ({ onObserverVisible }) => {
  return (
    <InView as="div" onChange={onObserverVisible}>
      <LoadObserver>Loading Data...</LoadObserver>
    </InView>
  );
};

ListObserver.propTypes = {
  onObserverVisible: PropTypes.func.isRequired,
};

ListObserver.displayName = 'ListObserver';

export default ListObserver;
