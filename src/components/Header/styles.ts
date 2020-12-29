import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  flex-wrap: wrap;
  background: #5636d3;
  padding: 30px 0;
  max-width: 100vw;

  header {
    width: 100%;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '8px 16px ' : '0 20px 150px')};
    display: flex;
    align-items: ${({ size }) => (size === 'small' ? '' : 'center')};
    justify-content: ${({ size }) =>
      size === 'small' ? 'center' : 'space-between'};
    flex-direction: ${({ size }) => (size === 'small' ? 'column' : 'row')};

    img {
      width: ${({ size }) => (size === 'small' ? '160px' : '')};
    }

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: ${({ size }) => (size === 'small' ? '32px' : '16px')};
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
