import React, { useState, useEffect } from 'react';
import { RemoveScroll } from 'react-remove-scroll';

import api from '../../services/api';

import Header from '../../components/Header';

import CardsDesktop from './CardsDesktop';

import CardsMobile from './CardsMobile';

import TableContainer from './TableContainer';

import ListTransactions from './ListTransaction';

import formatValue from '../../utils/formatValue';

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

interface Balance {
  income: string;
  outcome: string;
  total: string;
}

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<Balance>({} as Balance);

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      const response = await api.get('/transactions');

      const transactionsFormatted = response.data.transactions.map(
        (transaction: Transaction) => ({
          ...transaction,
          formattedValue: formatValue(transaction.value),
          formattedDate: new Date(transaction.created_at).toLocaleDateString(
            'pt-br',
          ),
        }),
      );

      const balanceFormatted = {
        income: formatValue(response.data.balance.income),
        outcome: formatValue(response.data.balance.outcome),
        total: formatValue(response.data.balance.total),
      };

      setTransactions(transactionsFormatted);
      setBalance(balanceFormatted);
    }

    loadTransactions();
  }, []);

  return (
    <>
      <Header />
      <Container>
        {window.screen.width > 600 ? (
          <CardsDesktop
            income={balance.income}
            outcome={balance.outcome}
            total={balance.total}
          />
        ) : (
          <CardsMobile
            income={balance.income}
            outcome={balance.outcome}
            total={balance.total}
          />
        )}

        {window.screen.width > 600 ? (
          <TableContainer transactions={transactions} />
        ) : (
          <ListTransactions transactions={transactions} />
        )}
      </Container>
    </>
  );
};

export default Dashboard;
