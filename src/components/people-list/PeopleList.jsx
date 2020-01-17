import React from 'react';
import styled from 'styled-components';
import PeopleListItem from './PeopleListItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeopleListThunk } from '../../redux';
import ListObserver from './ListObserver';

const ListWrapper = styled.div`
  box-shadow: 0 0 10px 1px #00000054;
  width: 300px;
  border-radius: 5px;
`;

ListWrapper.displayName = 'ListWrapper';

const PeopleListWrapper = styled.ul`
  margin: 0;
  padding: 10px 0;
  list-style-type: none;
`;

const PeopleList = () => {
  const dispatch = useDispatch();
  const { hasMore, peopleList } = useSelector((state) => state.people);

  const fetchMoreData = (inView) => {
    if (inView && hasMore) {
      dispatch(fetchPeopleListThunk());
    }
  };

  return (
    <ListWrapper>
      <PeopleListWrapper>
        {peopleList.map(({ id, ...rest }) => (
          <PeopleListItem key={id} {...rest} />
        ))}
      </PeopleListWrapper>
      {hasMore && <ListObserver onObserverVisible={fetchMoreData} />}
    </ListWrapper>
  );
};

export default PeopleList;
