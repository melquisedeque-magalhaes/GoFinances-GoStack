import React from 'react';

import { Container } from './styles';

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

const TableContainer: React.FC<TransactionsProps> = ({ transactions }) => (
  <Container>
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Preço</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td className="title">{transaction.title}</td>
            <td className={transaction.type}>
              {transaction.type === 'outcome' && ' - '}
              {transaction.formattedValue}
            </td>
            <td>{transaction.category.title}</td>
            <td>{transaction.formattedDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </Container>
);

export default TableContainer;
