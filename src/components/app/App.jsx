import React from 'react';
import styled from 'styled-components';
import PeopleList from '../people-list';
import Header from '../header';
import EmptyState from '../empty-state';
import { useSelector } from 'react-redux';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
`;

const App = () => {
  const { peopleList } = useSelector(({ people }) => people);

  return (
    <AppWrapper>
      <Header />
      <ContentWrapper>
        {peopleList && peopleList.length > 0 ? <PeopleList /> : <EmptyState />}
      </ContentWrapper>
    </AppWrapper>
  );
};

export default App;
