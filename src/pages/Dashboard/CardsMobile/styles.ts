import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';

interface CardProps {
  total?: boolean;
}

export const CardContainer = styled(Carousel)`
  margin-top: -60px;
  width: 100%;

  div {
    div {
      ul {
        li {
          min-width: 300px !important;
          background: transparent !important;
          height: 200px !important;
          margin-left: 6px !important;
        }
      }
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  background: ${({ total }: CardProps): string => (total ? '#FF872C' : '#fff')};
  padding: 24px 16px;
  border-radius: 5px;
  color: ${({ total }: CardProps): string => (total ? '#fff' : '#363F5F')};

  header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;

    p {
      font-size: 14px;
    }

    img {
      max-width: 40px;
      max-height: 40px;
    }
  }

  h1 {
    margin-top: 50px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }
`;
