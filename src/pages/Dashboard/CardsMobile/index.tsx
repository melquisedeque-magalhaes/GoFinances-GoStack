import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import incomeImg from '../../../assets/income.svg';
import outcomeImg from '../../../assets/outcome.svg';
import totalImg from '../../../assets/total.svg';

import { CardContainer, Card } from './styles';

interface Balance {
  income: string;
  outcome: string;
  total: string;
}

const CardsMobile: React.FC<Balance> = ({ income, outcome, total }) => (
  <CardContainer
    centerMode={false}
    showArrows={false}
    showStatus={false}
    showThumbs={false}
    showIndicators={false}
  >
    <Card>
      <header>
        <p>Entradas</p>
        <img src={incomeImg} alt="Income" />
      </header>
      <h1 data-testid="balance-income">{income}</h1>
    </Card>

    <Card>
      <header>
        <p>Saídas</p>
        <img src={outcomeImg} alt="Outcome" />
      </header>
      <h1 data-testid="balance-outcome">{outcome}</h1>
    </Card>

    <Card total>
      <header>
        <p>Total</p>
        <img src={totalImg} alt="Total" />
      </header>
      <h1 data-testid="balance-total">{total}</h1>
    </Card>
  </CardContainer>
);

export default CardsMobile;
