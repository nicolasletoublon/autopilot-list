import styled from 'styled-components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeopleListThunk } from '../../redux';

const EmptyStateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  outline: 0;
  appearance: none;
  transition: all 350ms ease-in;
  padding: 0 16px;
  text-decoration: none;
  border-radius: 4px;
  color: white;
  background-color: #c0c0c0;
  height: 40px;
  cursor: pointer;
  font-size: larger;

  &:hover {
    background-color: #969696;
  }

  &:active {
    background-color: #404040;
  }
`;

Button.displayName = 'LoadingButton';

const EmptyState = () => {
  const { isFetching } = useSelector(({ people }) => people);
  const dispatch = useDispatch();

  const handleLoadDataClick = () => dispatch(fetchPeopleListThunk());

  return (
    <EmptyStateWrapper>
      {isFetching}
      <h4>The list is empty. Click on the button below to load some data.</h4>
      <Button
        onClick={handleLoadDataClick}
        disabled={isFetching}
        id="load-data-button"
      >
        {isFetching ? 'Fetching data...' : 'Load data'}
      </Button>
    </EmptyStateWrapper>
  );
};

export default EmptyState;
