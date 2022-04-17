import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const SEED_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 2, 14),
  },
  {
    id: 'e2',
    title: 'Christmas Tree',
    amount: 250,
    date: new Date(2021, 11, 13),
  },
  {
    id: 'e3',
    title: 'Secret Lab Chair',
    amount: 499,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e4',
    title: 'Spotify Subscription',
    amount: 13.40,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e5',
    title: 'Samsung Monitor',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e6',
    title: 'Gym Membership',
    amount: 85.00,
    date: new Date(2022, 2, 4),
  },
  {
    id: 'e7',
    title: 'Netflix',
    amount: 17.50,
    date: new Date(2022, 0, 23),
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(SEED_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpense => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;