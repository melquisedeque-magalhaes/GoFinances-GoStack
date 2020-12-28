import styled from 'styled-components';

const smallScreen = window.screen.width;

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: ${smallScreen < 600 ? '0px' : '0 auto'};
  padding: ${smallScreen < 600 ? '40px 0px' : '40px 20px'};
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;
