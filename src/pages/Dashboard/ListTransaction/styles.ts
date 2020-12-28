import styled from 'styled-components';

interface ValueProps {
  type: 'income' | 'outcome';
}

export const Container = styled.section`
  margin-top: 64px;

  ul {
    width: 100vw;
    list-style-type: none;

    li {
      display: flex;
      flex-direction: column;
      padding: 16px;
      border-radius: 8px;
      max-width: 280px;
      border: 0;
      margin: 8px;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;
    }
  }
`;

export const CategoryContainerDate = styled.div`
  margin-top: 19px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #969cb3;
  }
`;

export const Title = styled.h3`
  color: #363f5f;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
`;

export const Value = styled.h5<ValueProps>`
  color: ${props => (props.type === 'income' ? '#12a454' : '#e83f5b')};
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
`;
