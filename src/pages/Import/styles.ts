import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  flex-wrap: wrap;
  width: 100%;
  max-width: 736px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: ${window.screen.width < 600 ? '36px' : '24'};
  line-height: 54px;
  color: #363f5f;
  text-align: center;
`;

export const ImportFileContainer = styled.section`
  flex-wrap: wrap;
  background: #fff;
  margin-top: 40px;
  border-radius: 5px;
  padding: ${window.screen.width < 600 ? '64px' : '24px'};
`;

export const Footer = styled.section`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${window.screen.width < 600 ? 'column' : 'row'};

  p {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 18px;
    color: #969cb3;

    img {
      margin-right: 5px;
    }
  }

  button {
    margin-top: ${window.screen.width < 600 ? '16px' : '0px'};
    background: #ff872c;
    color: #fff;
    border-radius: 5px;
    padding: 15px 80px;
    border: 0;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff872c')};
    }
  }
`;
