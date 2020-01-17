import styled from 'styled-components';

const SvgIcon = styled.svg.attrs(({ color, size }) => ({
  viewBox: '0 0 64 64',
  height: `${size}px`,
  width: `${size}px`,
  fill: color,
}))`
  speak: none;
  line-height: 1;
  vertical-align: baseline;
  overflow: visible;
`;

export default SvgIcon;
