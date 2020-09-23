import React from 'react';
import { Header } from './components/Header';
import { BalanceComponent } from './components/BalanceComponent';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState'

import './App.css';

function App() {
  return (
    <GlobalProvider>
        <Header />
        <div className="container">
          <BalanceComponent />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
    </GlobalProvider>
  );
}

export default App;
