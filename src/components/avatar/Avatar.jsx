import styled from 'styled-components';

const Avatar = styled.div`
  display: inline-flex;

  & img {
    max-height: ${({ size }) => size}px;
    max-width: ${({ size }) => size}px;
    width: 100%;
    height: 100%;
    border-radius: ${({ size }) => size}px;
    border: 1px solid #e4e4e4;
  }
`;

Avatar.displayName = 'Avatar';

export default Avatar;
