import React from 'react';
import styled from 'styled-components';
import SvgIcon from '../svg-icon';
import PropTypes from 'prop-types';
import Adornment from '../adornment/Adornment';

const ListItemWrapper = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 20px 10px 0;
  color: #343434;
  height: 40px;

  &:hover {
    background: #e8fffa;

    ${SvgIcon} {
      fill: #35e6c3;
    }
  }
`;

const AdornmentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 20%;
`;

const NameWrapper = styled.div`
  flex: 80%;
`;
NameWrapper.displayName = 'NameWrapper';

const PeopleListItem = ({ name, avatar }) => {
  return (
    <ListItemWrapper>
      <AdornmentWrapper>
        <Adornment avatar={avatar} name={name} />
      </AdornmentWrapper>
      <NameWrapper>{name}</NameWrapper>
    </ListItemWrapper>
  );
};

PeopleListItem.defaultProps = {
  avatar: undefined,
};

PeopleListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};

PeopleListItem.displayName = 'PeopleListItem';

export default PeopleListItem;
