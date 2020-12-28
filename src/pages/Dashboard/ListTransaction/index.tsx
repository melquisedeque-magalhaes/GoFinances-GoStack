import React from 'react';

import { Container, Value, Title, CategoryContainerDate } from './styles';

interface Transaction {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: 'income' | 'outcome';
  category: { title: string };
  created_at: Date;
}

interface TransactionsProps {
  transactions: Transaction[];
}

const ListTransactions: React.FC<TransactionsProps> = ({ transactions }) => (
  <Container>
    <ul>
      {transactions.map(transaction => (
        <li key={transaction.id}>
          <header>
            <Title className="title">{transaction.title}</Title>
          </header>

          <Value type={transaction.type}>
            {transaction.type === 'outcome' && ' - '}
            {transaction.formattedValue}
          </Value>

          <CategoryContainerDate>
            <span>{transaction.category.title}</span>
{' '}
            <span>{transaction.formattedDate}</span>
          </CategoryContainerDate>
        </li>
      ))}
    </ul>
  </Container>
);

export default ListTransactions;
